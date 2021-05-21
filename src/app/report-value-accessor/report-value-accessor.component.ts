import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { filtersMetadata, fieldType, fieldOperator, typeMetadata, operatorMetadata} from '../../assets/data/filters-metadata';
import { reportsData } from '../../assets/data/reports';
import { ActivatedRoute } from '@angular/router';
import { ReportFormGroup } from '../src/report-form-group';

@Component({
  selector: 'app-report-value-accessor',
  templateUrl: './report-value-accessor.component.html',
  styleUrls: ['./report-value-accessor.component.css']
})
export class ReportValueAccessorComponent implements OnInit {
  reportForm : ReportFormGroup;

  constructor(private fb: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const reportIdFromRoute = this.route.snapshot.paramMap.get('reportId');
    // Find the product that correspond with the id provided in route.
    const report = reportsData.find(report => {
      return report.id === Number(reportIdFromRoute);
    });

    this.reportForm = new ReportFormGroup(this.fb, report);
  }
  
  addFilter() : void {
    this.reportForm.addFilter();
  }

  filters() : FormArray {
    return this.reportForm.filters();
  }

  filtersMetadata() {
    return filtersMetadata;
  }

  removeFilter(index : number) {
    this.reportForm.filters();
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
    console.log(this.reportForm.report);
    this.reportForm.reset();
  }
}