import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-report-reactive',
  templateUrl: './report-reactive.component.html',
  styleUrls: ['./report-reactive.component.css']
})
export class ReportReactiveComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

 reportForm = this.fb.group({
    title: [''],
  });

  ngOnInit() {
  }

}