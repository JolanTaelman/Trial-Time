import { Component, OnInit, HostListener } from '@angular/core';
import { AngularFireDatabase, AngularFireList, listChanges } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';
import { isType } from '@angular/core/src/type';
import { from } from 'rxjs';
import rawdata from '../trials/trials.json';

declare var $: any;

@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.css']
})
export class TrialsComponent implements OnInit {
  items: Observable<any[]>;
  valls: Observable<any[]>;
  alltrials: [{}];
  trials: [{}];
  itemRef: AngularFireList<any>;
  namen: String[];
  error: boolean;


  constructor(db: AngularFireDatabase) {
    this.error = false;
    this.namen = [];
    this.itemRef = db.list('items', ref => ref.orderByValue());
    this.items = this.itemRef.snapshotChanges();
    this.valls = this.itemRef.valueChanges();

    this.trials = rawdata.ARR;
    this.alltrials = [];

    rawdata.ARR.map( a => {
      this.alltrials.push(a);
    });

     rawdata.HW.map( a => {
      this.alltrials.push(a);
    });

    rawdata.SB.map( a => {
      this.alltrials.push(a);
    });
  }

  ngOnInit() {
    this.valls.subscribe(
      x => x.forEach(e => {
        if (!this.namen.includes(e)) {
          this.namen.push(e);
        }
      }));

      $('.ui.dropdown').dropdown({
        clearable: true
      });
  }

  addcard(card: string) {
    this.voegToe(card);
  }

  setMenu(event) {
    console.log( event.srcElement.className);
    if (!event.srcElement.classList.contains('active')) {
      console.log(this.alltrials);

     $('#classtabs').children('.active')[0].className = 'item';
      event.srcElement.className = 'active item';
      const id = event.srcElement.id;
      this.trials = rawdata[id];
    }
  }


  public verwijderTrial(trial: string, value) {
    this.namen.splice(this.namen.indexOf(value), 1);
    this.itemRef.remove(trial);
  }

  public verwijderAlles() {
    this.namen.splice(0, this.namen.length);
    this.itemRef.remove();
  }

  public voegToe(value: string) {
    const trimcap = value.trim().replace(value.charAt(0), value.charAt(0).toLocaleUpperCase());
    if (value === '') {
      return;
    } else if (!this.namen.includes(trimcap)) {
      this.itemRef.push(trimcap);
      this.error = false;
    } else {
      this.error = true;
    }
  }
}

