## Импорт модулей для работы с формами

Импортировать 2 модуля
* FormsModule
* ReactiveFormsModule

```ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,          // <=== Шаблонные формы
    ReactiveFormsModule,  // <=== Реактивные формы
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```