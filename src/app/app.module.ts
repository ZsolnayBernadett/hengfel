/*
* Author: Zsolnai Bernadett
* Copyright: 2022, Zsolnai Bernadett
* Group: Szoft II N
* Date: 2022-01-13
* Github: 
* Licenc: GNU GPL
*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
