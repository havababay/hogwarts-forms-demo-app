export enum fieldType {
  Enum,
  String,
  Date,
  Boolean,
  Number
}

export enum fieldOperator {
  Equals,
  Contains,
  GreaterThan,
  LowerThan,
  GreaterThanOrEquals,
  LowerThanOrEquals,
  Between
}

export const filtersMetadata = [
  {
    name: 'house',
    display_name: 'House',
    type: fieldType.Enum,
    values : []
  },
    {
    name: 'year',
    display_name: 'Year',
    type: fieldType.Number,
    values : []
  },
  {
    name: 'birth_date',
    display_name: 'Birth Date',
    type: fieldType.Date
  },
  {
    name: 'has_parents_approval',
    display_name: 'Has Parents Approval',
    type: fieldType.Boolean
  },
  {
    name: 'full_name',
    display_name: 'Full Name',
    type: fieldType.String
  }
];

export const typeMetadata = new Map<fieldType, fieldOperator[]>([
  [fieldType.Enum, [fieldOperator.Equals]],
  [fieldType.Boolean, [fieldOperator.Equals]],
  [fieldType.String,[fieldOperator.Equals, fieldOperator.Contains]],
  [fieldType.Date, 
      [fieldOperator.Equals, 
       fieldOperator.GreaterThan, 
       fieldOperator.GreaterThanOrEquals, 
       fieldOperator.LowerThan, 
       fieldOperator.LowerThanOrEquals]],
  [fieldType.Number, 
      [fieldOperator.Equals, 
       fieldOperator.GreaterThan, 
       fieldOperator.GreaterThanOrEquals, 
       fieldOperator.LowerThan, 
       fieldOperator.LowerThanOrEquals]]
]);

export const operatorMetadata = new Map<fieldOperator, string>([
  [fieldOperator.Equals,'Equal to (=)'],
  [fieldOperator.Contains,'Contains'],
  [fieldOperator.GreaterThan,'Greater than (>)'],
  [fieldOperator.LowerThan,'Lower than (<)'],
  [fieldOperator.GreaterThanOrEquals,'Greater than or equal to (>=)'],
  [fieldOperator.LowerThanOrEquals,'Lower than or equal to (<=)'],
  [fieldOperator.Between,'Between (>= && <=)']
]);