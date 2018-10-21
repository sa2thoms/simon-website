import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossBattleComponent } from './boss-battle.component';

describe('BossBattleComponent', () => {
  let component: BossBattleComponent;
  let fixture: ComponentFixture<BossBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
