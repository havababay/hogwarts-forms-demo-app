import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { filtersMetadata } from '../../assets/data/filters-metadata';

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

  filtersMetadata() {
    return filtersMetadata;
  }

  removeFilter(index : number) {
    this.filters().removeAt(index);
  }
}