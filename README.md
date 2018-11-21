## Создание компонентов для шаблонных и реактивных форм

```bash
ng g c forms
ng g c reactive-forms
```

## Подготовка шаблонов для форм
1. Скопировать разметку формы в созданные компоненты
2. Разместить созданные компоненты в главном компоненте

```html
<div class="app-wrapper">
  <app-forms></app-forms>
  <app-reactive-forms></app-reactive-forms>
</div>
```