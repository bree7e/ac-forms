## Привязка данных

### Односторонняя
Шаблонная форма
```html
    <input [ngModel]="name.first" name="first" placeholder="Имя">
    <input [ngModel]="name.last" name="last" placeholder="Фамилия">
    <pre>{{ name | json}}</pre>
```

Реактивная форма
```ts
    this.form.patchValue({
      first: 'Соловей',
      last: 'Разбойник'
    });
```

