import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrialsComponent } from './trials/trials.component';
import { TrialComponent } from './trial/trial.component';

const routes: Routes = [
  { path: 'trials',
  component: TrialComponent
},
  { path: '',
  redirectTo: '/trial',
  pathMatch: 'full'
},
  { path: '**', component: TrialsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
