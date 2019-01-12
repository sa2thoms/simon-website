import { PowerGridModule } from './power-grid.module';

describe('PowerGridModule', () => {
  let powerGridModule: PowerGridModule;

  beforeEach(() => {
    powerGridModule = new PowerGridModule();
  });

  it('should create an instance', () => {
    expect(powerGridModule).toBeTruthy();
  });
});
