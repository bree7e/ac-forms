import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-comp',
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent {
  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      first: '',
      last: '',
      account: this.fb.group({
        username: '',
        password: ['', Validators.required],
        confirm: ['', Validators.required],
      }),
      newsletter: ''
    });
    this.form.patchValue({
      first: 'Соловей',
      last: 'Разбойник'
    });
  }

}
