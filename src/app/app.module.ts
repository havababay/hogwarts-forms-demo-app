import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReportsListComponent } from './reports-list/reports-list.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: ReportsListComponent }, ]),],
  declarations: [ AppComponent, HeaderComponent, ReportsListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
