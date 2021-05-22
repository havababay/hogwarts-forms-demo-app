import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ReportFilter } from "../../../assets/data/report-filter";

export class ReportFilterFgCva {
  filterForm : FormControl;

  constructor(private fb : FormBuilder, initialFilter? : ReportFilter) {
    this.createFormGroup();

    if (initialFilter != null) {
      this.filter = initialFilter;
    }
  }

  private createFormGroup() {
    this.filterForm = this.fb.control({
      name: ['', [Validators.required]],
      operator: ['', [Validators.required]],
      value: ['', [Validators.required]],
    });
  }

  public set filter(initialFilter : ReportFilter) {
    this.filterForm.patchValue(initialFilter);
  }

  public get filter() : ReportFilter {
    return <ReportFilter>this.filterForm.value;
  }
}