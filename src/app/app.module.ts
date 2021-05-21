import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportComponent } from './report/report.component';
import { ReportReactiveComponent } from './report-reactive/report-reactive.component';
import { ReportDynamicComponent } from './report-dynamic/report-dynamic.component';
import { AddFilterDialogComponent } from './add-filter-dialog/add-filter-dialog.component';
import { ReportCleanCodeComponent } from './report-clean-code/report-clean-code.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: ReportsListComponent }, 
      { path: 'report/:reportId', component: ReportComponent },
      { path: 'reportReactive/:reportId', component: ReportReactiveComponent },
      { path: 'reportDynamic/:reportId', component: ReportDynamicComponent },
      { path: 'reportClean/:reportId', component: ReportCleanCodeComponent }]),],
  entryComponents: [AddFilterDialogComponent],
  declarations: [ AppComponent, HeaderComponent, ReportsListComponent, ReportComponent, ReportReactiveComponent, ReportDynamicComponent, AddFilterDialogComponent, ReportCleanCodeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
