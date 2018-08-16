import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LineChartModule } from '../../modules/line-chart/line-chart.module';
import { PiChartModule } from '../../modules/pi-chart/pi-chart.module';
const routes: Routes = [
  {
      path: '',
      component: DashboardComponent,
    
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LineChartModule,
    PiChartModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
