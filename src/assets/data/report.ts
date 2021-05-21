import { ReportFilter } from "./report-filter";

export interface Report {
  id : number;
  title : string;
  updated : Date;
  updated_by : string;
  filters : ReportFilter[];
}