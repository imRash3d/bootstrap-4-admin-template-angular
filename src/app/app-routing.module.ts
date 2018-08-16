import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: '../app/admin/admin.module#AdminModule',
    },
    {
      path: 'login',
      loadChildren: '../app/auth/auth.module#AuthModule',
  },
   
    {path: '**', redirectTo: 'dashboard'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }
