import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import localeRu from '@angular/common/locales/ru';
import { MAT_DATE_LOCALE } from '@angular/material/core';

registerLocaleData(localeRu);

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'RUB' },
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
  ],
})
export class AppLocaleModule {}
