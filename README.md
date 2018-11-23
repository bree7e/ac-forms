## Валидация форм

### Реактивная форма
```ts
    account: this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }),
```

Статус формы
```html
  <pre>Form status: {{ form.status }}</pre>
  <pre>Username status: {{ form.get('account.username').status }}</pre>
```

### Шаблонная форма
```html
  <input ngModel name="username" required>
  <input ngModel name="password" required>
```

Получить ссылки на экземпляры контролов
```html
  <form novalidate #f="ngForm">
  <input ngModel name="password" placeholder="Пароль" required #pass="ngModel">
```

Статус формы
```html
  <pre>Form status: {{ f.control?.status }}</pre>
  <pre>Username status: {{ pass.status }}</pre>
```

