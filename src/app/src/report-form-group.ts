import { FormArray, FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Report } from '../../assets/data/report';
import { ReportFilter } from '../../assets/data/report-filter';

import { ReportFilterFormGroup } from './report-filter-form-group';

export class ReportFormGroup {
  reportForm: FormGroup;
  private filtersFormGroup: ReportFilterFormGroup[] = [];

  constructor(private fb: FormBuilder, initialReport?: Report) {
    this.createFormGroup();

    if (initialReport != null) {
      this.report = initialReport;
    }
  }

  set report(initialReport: Report) {
    this.reportForm.patchValue(initialReport);

    initialReport.filters.forEach((filter, index) => {
      this.addFilterInternal(filter);
    });
  }

  addFilter() : void {
    this.addFilterInternal();
  }

  removeFilter(index : number) {
    this.filters().removeAt(index);
    delete this.filtersFormGroup[index];

    this.reportForm.markAsDirty();
    this.reportForm.markAsTouched();
  }

  filters(): FormArray {
    return this.reportForm.get('filters') as FormArray;
  }

  get report(): Report {
    return <Report>this.reportForm.value;
  }

  reset() {
    //this.reportForm.reset(this.reportForm.value);
    this.reportForm.markAsPristine();
    this.reportForm.markAsUntouched();
  }

  private addFilterInternal(initialFilter? : ReportFilter) {
    var filterFormGroup = new ReportFilterFormGroup(this.fb, initialFilter);

    this.filtersFormGroup.push(filterFormGroup);
    this.filters().push(filterFormGroup.filterForm);

    if (initialFilter != null) {
      this.reportForm.markAsDirty();
      this.reportForm.markAsTouched();
    }
  }

  private createFormGroup() {
    this.reportForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern("^((?!Voldemort).)*$")]],
      filters: this.fb.array([])
    });
  }
}
