import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Wz1Component } from './wz1/wz1.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [AppComponent, Wz1Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 
    ReactiveFormsModule,
    FormsModule,

    HttpClientModule,

    MatStepperModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule

  ],
  providers: [],
 
  bootstrap: [AppComponent],
})
export class AppModule {}
