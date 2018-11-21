import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
      username: '',
      password: '',
      newsletter: '',
    });
  }

  ngOnInit() {
  }

}
