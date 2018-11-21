## Вложенные формы

### Реактивная форма
```ts
    this.form = this.fb.group({
      first: '',
      last: '',
      account: this.fb.group({
        username: '',
        password: '',
      }),
      newsletter: '',
    });
```

```html
  <div formGroupName="account">
    <label>Аккаунт</label>
    <input formControlName="username" placeholder="Логин">
    <input formControlName="password" placeholder="Пароль" required>
  </div>
```

### Шаблонная форма
```html
    <input [ngModel]="name.first" name="first" placeholder="Имя">
    <input [ngModel]="name.last" name="last" placeholder="Фамилия">
    <pre>{{ name | json}}</pre>
```



