
import {bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@ NgModule({
  
  imports: [CommonModule , FormsModule],
  providers: [],
  bootstrap: []
})


export class AppModule { }