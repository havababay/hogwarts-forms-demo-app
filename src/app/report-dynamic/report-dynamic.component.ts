import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddFilterDialogComponent } from '../add-filter-dialog/add-filter-dialog.component';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

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
    filters: this.fb.array([]),
  });


  addFilter() : void {
    /*console.log('add filter');
    const dialogRef = this.dialog.open(AddFilterDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });*/
    this.filters().push(this.createFilterFormGroup());
  }

  createFilterFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      operator: ['', [Validators.required]],
      value: ['', [Validators.required]],
    });
  }

  filters() : FormArray {
    return this.reportForm.get('filters') as FormArray;
  }
}