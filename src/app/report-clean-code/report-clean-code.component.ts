import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { filtersMetadata, fieldType, fieldOperator, typeMetadata, operatorMetadata} from '../../assets/data/filters-metadata';
import { reportsData } from '../../assets/data/reports';
import { ActivatedRoute } from '@angular/router';
import { Report } from '../../assets/data/report';

@Component({
  selector: 'app-report-clean-code',
  templateUrl: './report-clean-code.component.html',
  styleUrls: ['./report-clean-code.component.css']
})
export class ReportCleanCodeComponent implements OnInit {
  reportForm = this.fb.group({
        title: [''],
        filters: this.fb.array([]),
     });;

  constructor(private fb: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const reportIdFromRoute = this.route.snapshot.paramMap.get('reportId');
    // Find the product that correspond with the id provided in route.
    const report = reportsData.find(report => {
      return report.id === Number(reportIdFromRoute);
    });

    if (report != null) {
      this.loadData(report);
    }
  }

  loadData(reportData : Report) { 
    // Patch the flat data in the form.
    this.reportForm.patchValue(reportData);
    // Patch all requirements.
    reportData.filters.forEach((filter, index) => {
      // Create a formGroup that we will patch data to.
      const filterFormGroup = this.createFilterFormGroup();
      // Patch our value to the formGroup
      filterFormGroup.patchValue(filter)
      // Push our patched formGroup to our formArray
      this.filters().push(filterFormGroup);
    });
  }
  


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

    this.reportForm.markAsDirty();
    this.reportForm.markAsTouched();
  }

  currentOperators(i : number) : fieldOperator[] | undefined{
    const fieldName = this.filters().at(i).get('name')?.value;
    
    const metadata = filtersMetadata.find(metadata => {
      return metadata.name === fieldName;
    });

    if (metadata === undefined) {
      return undefined;
    }

    return typeMetadata.get(metadata.type);
  }

  operatorsName(operator : fieldOperator) {
    return operatorMetadata.get(operator);
  }

  saveReport() {
    console.log(this.reportForm.value);
    //this.reportForm.reset(this.reportForm.value);
    this.reportForm.markAsPristine();
    this.reportForm.markAsUntouched();
  }
}