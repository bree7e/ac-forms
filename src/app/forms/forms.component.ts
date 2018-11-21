import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-comp',
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  name = { first: 'Илья ', last: 'Муромец' };
}
