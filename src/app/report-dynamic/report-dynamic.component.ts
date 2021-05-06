import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AddFilterDialogComponent } from '../add-filter-dialog/add-filter-dialog.component';

@Component({
  selector: 'app-report-dynamic',
  templateUrl: './report-dynamic.component.html',
  styleUrls: ['./report-dynamic.component.css']
})
export class ReportDynamicComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
  }

  reportForm = this.fb.group({
    title: [''],
  });


  addFilter() : void {
    console.log('add filter');
    const dialogRef = this.dialog.open(AddFilterDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}