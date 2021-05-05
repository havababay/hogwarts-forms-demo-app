import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: ReportsListComponent }, 
      { path: 'report/:reportId', component: ReportComponent }]),],
  declarations: [ AppComponent, HeaderComponent, ReportsListComponent, ReportComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
