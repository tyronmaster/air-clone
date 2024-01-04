import { NgModule } from '@angular/core';
import { ErrorLinksModule } from './components/error-links/error-links.module';
import { ErrorApplicationModule } from './components/error-application/error-application.module';
import { ErrorHintModule } from './components/error-hint/error-hint.module';
import { ErrorApplicationComponent } from './components/error-application/error-application.component';
import { ErrorHintComponent } from './components/error-hint/error-hint.component';
import { ErrorLinksComponent } from './components/error-links/error-links.component';
import { ErrorLogoComponent } from './components/error-logo/error-logo.component';
import { ErrorLogoModule } from './components/error-logo/error-logo.module';
import { ErrorStatusComponent } from './components/error-status/error-status.component';
import { ErrorStatusModule } from './components/error-status/error-status.module';
import { ErrorTitleComponent } from './components/error-title/error-title.component';
import { ErrorTitleModule } from './components/error-title/error-title.module';



@NgModule({
  imports: [
    ErrorLinksModule,
    ErrorApplicationModule,
    ErrorHintModule,
    ErrorLinksModule,
    ErrorLogoModule,
    ErrorStatusModule,
    ErrorTitleModule,
  ],
  exports: [
    ErrorTitleComponent,
    ErrorStatusComponent,
    ErrorLogoComponent,
    ErrorHintComponent,
    ErrorApplicationComponent,
    ErrorLinksComponent,
  ],
})
export class ErrorsSharedModule {}
