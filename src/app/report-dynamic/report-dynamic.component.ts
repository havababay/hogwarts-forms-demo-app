import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-report-dynamic',
  templateUrl: './report-dynamic.component.html',
  styleUrls: ['./report-dynamic.component.css']
})
export class ReportDynamicComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  reportForm = this.fb.group({
    title: [''],
  });


}