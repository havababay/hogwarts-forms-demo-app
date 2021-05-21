import { Component, OnInit } from '@angular/core';
import { fieldOperator, filtersMetadata, operatorMetadata, typeMetadata } from '../../assets/data/filters-metadata';

@Component({
  selector: 'app-report-value-accessor-filter',
  templateUrl: './report-value-accessor-filter.component.html',
  styleUrls: ['./report-value-accessor-filter.component.css']
})
export class ReportValueAccessorFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentOperators(i : number) : fieldOperator[] | undefined{
    const fieldName = "house";//this.filters().at(i).get('name')?.value;
    
    const metadata = filtersMetadata.find(metadata => {
      return metadata.name === fieldName;
    });

    if (metadata === undefined) {
      return undefined;
    }

    return typeMetadata.get(metadata.type);
  }

  operatorsName(operator : fieldOperator) {
    return operatorMetadata.get(operator);
  }

 filtersMetadata() {
    return filtersMetadata;
  }
}