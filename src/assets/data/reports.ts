import { fieldOperator } from "./filters-metadata";

export const reportsData = [
  {
    id: 1,
    title: 'All Gryffindor Students',
    updated:  new Date("08/01/1982"),
    updated_by: 'Hava',
    filters : [{
      name: 'house',
      operator: fieldOperator.Equals,
      value : 'Gryffindor',
    }]
  },
  {
    id: 2,
    title: 'Third year and above',
    updated: new Date("23/02/1982"),
    updated_by: 'Hava',
    filters : [{
      name: 'year',
      operator: fieldOperator.GreaterThan,
      value : '3',
    }]
  },
  {
    id: 3,
    title: 'Weasley Family',
    updated: new Date("17/02/1982"),
    updated_by: 'Hava',
    filters : [{
      name: 'full_name',
      operator: fieldOperator.Contains,
      value : 'Weasley',
    }]
  }
];