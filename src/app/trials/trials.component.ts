import { Component, OnInit, HostListener } from '@angular/core';
import { AngularFireDatabase, AngularFireList, listChanges } from '@angular/fire/database';
import { Observable } from 'rxjs';
// import { defineBase } from '@angular/core/src/render3';
// import { isType } from '@angular/core/src/type';
import { from } from 'rxjs';
import rawdata from '../trials/trials.json';
import {orderBy} from 'lodash/';
declare var $: any;

@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.css']
})
export class TrialsComponent implements OnInit {
  items: Observable<any[]>;
  valls: Observable<any[]>;
  alltrials = rawdata;
  trials: any[];
  itemRef: AngularFireList<any>;
  namen: String[];
  error: boolean;
  showARR: boolean;
  showHW: boolean;
  showSB: boolean;
  showARRR: boolean;
  showHWR: boolean;
  showSBR: boolean;

  constructor(db: AngularFireDatabase) {
    this.error = false;
    this.namen = [];
    this.itemRef = db.list('items', ref => ref.orderByValue());
    this.items = this.itemRef.snapshotChanges();
    this.valls = this.itemRef.valueChanges();
    this.trials = rawdata.ARR;
    this.trials.sort((a, b) => (a.lv > b.lv) ? 1 : -1);

  }

  ngOnInit() {
    this.valls.subscribe(
      x => x.forEach(e => {
        if (!this.namen.includes(e)) {
          this.namen.push(e);
        }
      }));

    this.showARR = false;
    this.showHW = false;
    this.showSB = false;

    this.showARRR = false;
    this.showHWR = false;
    this.showSBR = false;

    $('.ui.dropdown').dropdown({
      clearable: true
    });
  }

  addcard(card: string) {
    this.voegToe(card);
  }

  openclosebutton() {
    if ($('#buttonicon').hasClass('left icon')) {
      $('#buttonicon').removeClass('left icon');
      $('#buttonicon').addClass('right icon');
    } else {
      $('#buttonicon').removeClass('right icon');
      $('#buttonicon').addClass('left icon');
    }
    $('.ui.sidebar').sidebar('toggle');
  }

  setMenu(event) {
    if (!event.srcElement.classList.contains('active')) {
      $('#classtabs').children('.active')[0].className = 'item';
      event.srcElement.className = 'active item';
      const id = event.srcElement.id;
      this.trials = rawdata[id];
      this.trials.sort((a, b) => (a.lv > b.lv) ? 1 : -1);
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

  public showBar(value: string) {
    switch (value) {
      case 'arr': {
        this.showARR = !this.showARR;
        break;
      }
      case 'hw': {
        this.showHW = !this.showHW;
        break;
      }
      case 'sb': {
        this.showSB = !this.showSB;
        break;
      }
      case 'arrr': {
        this.showARRR = !this.showARRR;
        break;
      }
      case 'hwr': {
        this.showHWR = !this.showHWR;
        break;
      }
      case 'sbr': {
        this.showSBR = !this.showSBR;
        break;
      }
    }
  }
}
