import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrialsComponent } from './trials/trials.component';
import { environment } from 'src/environments/environment.prod';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { GridTesterComponent } from './grid-tester/grid-tester.component';

@NgModule({
  declarations: [
    AppComponent,
    TrialsComponent,
    GridTesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
