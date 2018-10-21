import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BossBattleComponent} from './boss-battle-component/boss-battle.component';

const secondaryRoutes: Routes = [
  { path: 'battle',  component: BossBattleComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(secondaryRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class BossBattleRoutingModule { }
