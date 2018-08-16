import { PiChartModule } from './pi-chart.module';

describe('PiChartModule', () => {
  let piChartModule: PiChartModule;

  beforeEach(() => {
    piChartModule = new PiChartModule();
  });

  it('should create an instance', () => {
    expect(piChartModule).toBeTruthy();
  });
});
