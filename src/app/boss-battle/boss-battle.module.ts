import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BossBattleComponent } from './boss-battle-component/boss-battle.component';
import {BossBattleRoutingModule} from './boss-battle-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BossBattleRoutingModule
  ],
  declarations: [
    BossBattleComponent
  ]
})
export class BossBattleModule { }
