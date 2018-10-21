import { NgModule } from '@angular/core';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'leader-board', component: LeaderboardComponent },
  { path: '',
    redirectTo: '/leader-board',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
