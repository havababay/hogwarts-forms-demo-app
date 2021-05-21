import { fieldOperator } from "./filters-metadata";

export interface ReportFilter {
  name : string;
  operator : fieldOperator;
  value : string;
}