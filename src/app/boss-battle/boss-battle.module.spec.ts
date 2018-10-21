import { BossBattleModule } from './boss-battle.module';

describe('BossBattleModule', () => {
  let bossBattleModule: BossBattleModule;

  beforeEach(() => {
    bossBattleModule = new BossBattleModule();
  });

  it('should create an instance', () => {
    expect(bossBattleModule).toBeTruthy();
  });
});
