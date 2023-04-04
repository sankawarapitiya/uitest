import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetterComponent } from './letter/letter.component';
import { Wz1Component } from './wz1/wz1.component';

const routes: Routes = [
 
{ path: '', redirectTo: 'letter', pathMatch: 'full' },

  {path : 'w1' , component: Wz1Component},
  {path : 'letter' , component: LetterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
