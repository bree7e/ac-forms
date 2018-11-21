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
    <div ngModelGroup="account">
      <label>Аккаунт</label>
      <input ngModel name="username" placeholder="Логин">
      <input ngModel name="password" placeholder="Пароль" required>
    </div>
```



