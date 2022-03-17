

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { GradimentoComponent } from './gradimento/gradimento.component';
import { MainComponent } from './main/main.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagefourComponent } from './pagefour/pagefour.component';


@NgModule({
  declarations: [
    AppComponent,
    GradimentoComponent,
    MainComponent,
    PagethreeComponent,
    PagefourComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'it-IT'},
    {provide: MAT_DATE_LOCALE, useValue: 'it-IT'},
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
