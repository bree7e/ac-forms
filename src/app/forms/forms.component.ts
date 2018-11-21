import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {

  name = { first: 'Илья ', last: 'Муромец' };

  ngOnInit() {
  }

}
