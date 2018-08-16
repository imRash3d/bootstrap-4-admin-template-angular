import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, TopNavigationComponent, LeftSidebarComponent],
  exports:[AdminRoutingModule]
})
export class AdminModule { }
