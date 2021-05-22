import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ReportFilter } from "../../../assets/data/report-filter";

export class ReportFilterFgCva {
  filterForm : FormControl;

  constructor(private fb : FormBuilder, initialFilter? : ReportFilter) {
    this.createFormGroup();

    if (initialFilter != null) {
      this.filter = initialFilter;
    }

    console.log('ReportFilterFgCva ' + JSON.stringify(this.filterForm.value));
  }

  private createFormGroup() {
    this.filterForm = new FormControl();
    
    // using the form builder initialize the value with a function, without it, error about disable.
    /*this.fb.control({
      name: ['', [Validators.required]],
      operator: ['', [Validators.required]],
      value: [''],
    });*/
  }

  public set filter(initialFilter : ReportFilter) {
    console.log('ReportFilterFgCva patch');
    this.filterForm.patchValue(initialFilter);
  }

  public get filter() : ReportFilter {
    return <ReportFilter>this.filterForm.value;
  }
}