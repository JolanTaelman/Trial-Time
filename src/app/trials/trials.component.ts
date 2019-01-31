import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, listChanges } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';
import { isType } from '@angular/core/src/type';
import { from } from 'rxjs';


@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.css']
})
export class TrialsComponent implements OnInit {

  items: Observable<any[]>;
  itemRef: AngularFireList<any>;
  isTrue: Boolean;
  namen: String[];

  constructor(db: AngularFireDatabase) {
    this.namen = [];
    this.itemRef = db.list('items');
    this.items = this.itemRef.snapshotChanges();
  }

  ngOnInit() {
  }


  public verwijderTrial(trial: string) {
    this.itemRef.remove(trial);
  }


  public voegToe(value: string) {
    this.items.pipe()
      this.itemRef.push(value);

    }
  }

