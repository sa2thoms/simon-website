import { BossBattleRoutingModule } from './boss-battle-routing.module';

describe('BossBattleRoutingModule', () => {
  let bossBattleRoutingModule: BossBattleRoutingModule;

  beforeEach(() => {
    bossBattleRoutingModule = new BossBattleRoutingModule();
  });

  it('should create an instance', () => {
    expect(bossBattleRoutingModule).toBeTruthy();
  });
});
