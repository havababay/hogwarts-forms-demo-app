import { Component, OnInit } from '@angular/core';
import { reportsMetadata } from '../../assets/data/reports';

export interface PeriodicElement {
  id : number;
  name: string;
  updated_by : string;
}

const ELEMENT_DATA: PeriodicElement[] = reportsMetadata;

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  reportsList = reportsMetadata;
  
  displayedColumns: string[] = ['id', 'name', 'updated_by'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}