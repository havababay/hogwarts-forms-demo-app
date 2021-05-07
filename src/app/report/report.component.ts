import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { reportsData } from '../../assets/data/reports';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  report;
  reportTitle;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    // First get the product id from the current route.
    const reportIdFromRoute = this.route.snapshot.paramMap.get('reportId');
    // Find the product that correspond with the id provided in route.
    this.report = reportsData.find(report => {
      return report.id === Number(reportIdFromRoute);
    });

    this.reportTitle = this.report.name;
  }
}