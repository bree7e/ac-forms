import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      first: '',
      last: '',
      account: this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      }),
      newsletter: '',
    });
    this.form.patchValue({
      first: 'Соловей',
      last: 'Разбойник'
    });
  }

  ngOnInit() {
  }

}
