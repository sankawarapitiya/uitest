import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Wz1Component } from './wz1/wz1.component';

const routes: Routes = [
 
{ path: '', redirectTo: 'w1', pathMatch: 'full' },
  {path : 'w1' , component: Wz1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
