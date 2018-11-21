## Работа с реактивными формами

### Создание контролов вручную
```ts
  form = new FormGroup({
    first: new FormControl(),
    last: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    newsletter: new FormControl(),
  });
```

### Или создание контролов с помощью `FormBuilder`
```ts
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
```

### Работа с разметкой 
У тега формы следует разместить директиву `formGroup` со значением созданной формы `form`
```html
  <form novalidate [formGroup]="form">
```

Заменить атрибут `name` на `formControlName`.   Вместо
```html
  <input name="first" placeholder="Имя">
```
Должно стать:
```html
  <input formControlName="first" placeholder="Имя">
```

### Работа со значениями формы
Получить значения можно через свойство формы `value`
```html
<pre>Form: {{ form.value | json }}</pre>
```

* [FormGroupDirective](https://angular.io/api/forms/FormGroupDirective)