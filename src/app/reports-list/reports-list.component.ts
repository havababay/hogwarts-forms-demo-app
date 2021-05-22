import { Component, OnInit } from '@angular/core';
import { reportsData } from '../../assets/data/reports';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id : number;
  title: string;
  updated_by : string;
}

const ELEMENT_DATA: PeriodicElement[] = reportsData;

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  reportsList = reportsData;
  
  displayedColumns: string[] = ['id', 'title', 'updated_by'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newReport(){
    this.router.navigate(['/reportVA/new']);
  }
}