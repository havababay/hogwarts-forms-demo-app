import { Component} from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { fieldOperator, filtersMetadata, operatorMetadata, typeMetadata } from '../../assets/data/filters-metadata';

@Component({
  selector: 'app-report-value-accessor-filter',
  templateUrl: './report-value-accessor-filter.component.html',
  styleUrls: ['./report-value-accessor-filter.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ReportValueAccessorFilterComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ReportValueAccessorFilterComponent
    },
  ]
})
export class ReportValueAccessorFilterComponent implements ControlValueAccessor, Validator  {

  constructor(private fb: FormBuilder) { }

  filterForm : FormGroup = this.fb.group({
      name: ['', [Validators.required]],
      operator: ['', [Validators.required]],
      value: ['', [Validators.required]],
    });

  onTouched = () => {};

  onChanged = () => {};

  validate(control: AbstractControl): ValidationErrors|null {
    console.log('validate ' + this.filterForm.valid);
     return this.filterForm.valid ? null : {filterForm: 'Problems in filterForm!'};
  }

  writeValue(value: any): void {
    console.log('write value ' + value);
    if (value) {
      this.filterForm.patchValue(value, {emitEvent: false});
      this.onTouched();
    }
  }

  registerOnChange(fn: any): void {
    console.log('register on changes');
    this.filterForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.filterForm.statusChanges.subscribe(fn);
  }

  currentOperators(i : number) : fieldOperator[] | undefined{
    const fieldName = this.filterForm.get('name')?.value;
    
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