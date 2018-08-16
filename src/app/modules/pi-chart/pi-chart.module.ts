import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiChartComponent } from './pi-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PiChartComponent],
  exports: [PiChartComponent],
})
export class PiChartModule { }
