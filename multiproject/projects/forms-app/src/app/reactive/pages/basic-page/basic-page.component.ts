import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx4090 = {
  name: 'RTX 4090',
  price: 1500,
  inStorage: 10,
};

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent implements OnInit {
  // public myForm: FormGroup = new FormGroup({
  // default value, validators, async validators
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0),
  // it's not necessary to place the keys if we don't use them
  //   inStorage: new FormControl(0),
  // });

  // form builder
  public myForm: FormGroup = this.fb.group({
    // default value, validators, async validators
    name: ['', [Validators.required, Validators.minLength(3)], []],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [[0], [Validators.required, Validators.min(0)]],
  });

  // injection - form builder
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // set value to form
    // this.myForm.reset(rtx4090);
  }

  isValidField(field: string): boolean | null {
    // has errors: specific error type
    // errors: if there are errors, return false if there are no errors

    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `This field must have at least ${errors['minlength'].requiredLength} characters`;
        case 'min':
          return 'The minimum value is 0';
      }
    }

    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      // mark all fields as touched
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    // reset form - send to initial state
    this.myForm.reset({
      price: 0,
      inStorage: 0,
    });
  }
}
