import { FormBuilder, FormGroup } from "@angular/forms";
import { Report } from "../../../assets/data/report";

export class ReportFormGroup {
  private reportForm : FormGroup;

  constructor(private fb : FormBuilder, initialReport : Report) {
    this.createReportForm();
  }

  private createReportForm() {
    this.reportForm = this.fb.group({
        title: [''],
        filters: this.fb.array([]),
     });;
  }
}