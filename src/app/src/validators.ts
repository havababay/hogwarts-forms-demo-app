import { Validators } from "@angular/forms";

export const VOLDEMORT_VALIDATOR = 
  Validators.pattern("^((?!Voldemort).)*$");