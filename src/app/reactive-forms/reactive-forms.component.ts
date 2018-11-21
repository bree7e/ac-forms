import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent implements OnInit {
  form = new FormGroup({
    first: new FormControl(),
    last: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    newsletter: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

}
