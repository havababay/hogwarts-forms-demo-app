import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-reactive',
  templateUrl: './report-reactive.component.html',
  styleUrls: ['./report-reactive.component.css']
})
export class ReportReactiveComponent{

  constructor(private fb: FormBuilder) { }

  hogwartsReportForm = this.fb.group({
    title: ['', [Validators.required, Validators.pattern("^((?!Voldemort).)*$")]],
  });
}