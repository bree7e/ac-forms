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

### Создание контролов с помощью `FormBuilder`
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