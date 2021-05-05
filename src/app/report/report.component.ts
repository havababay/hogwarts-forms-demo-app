import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { reportsMetadata } from '../../assets/data/reports';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  report;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    // First get the product id from the current route.
    const reportIdFromRoute = this.route.snapshot.paramMap.get('reportId');
    // Find the product that correspond with the id provided in route.
    this.report = reportsMetadata.find(report => {
      return report.id === Number(reportIdFromRoute);
    });
  }
}