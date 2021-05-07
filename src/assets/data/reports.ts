import { fieldOperator } from "./filters-metadata";

export const reportsData = [
  {
    id: 1,
    title: 'All Gryffindor Students',
    updated:  new Date("08/01/1982"),
    updated_by: 'Hava',
    filters : []
  },
  {
    id: 2,
    title: 'Jesse Labreck',
    updated: new Date("23/02/1982"),
    updated_by: 'Hava',
    filters : [{
      name: 'house',
      operator: fieldOperator.Equals,
      value : '3',
    }]
  },
  {
    id: 3,
    title: 'John Doe',
    updated: new Date("17/02/1982"),
    updated_by: 'Hava',
    filters : []
  },
  {
    id: 4,
    title: 'Donald Trump',
    updated: new Date("16/03/1982"),
    updated_by: 'Hava',
    filters : []
  }
];