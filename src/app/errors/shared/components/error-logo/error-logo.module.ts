import { NgModule } from '@angular/core';
import { ErrorLogoComponent } from './error-logo.component';
import { RouterModule } from '@angular/router';
import { NavigationSharedModule } from 'src/app/core/navigation/shared';



@NgModule({
  imports: [RouterModule, NavigationSharedModule],
  declarations: [ErrorLogoComponent],
  exports: [ErrorLogoComponent],
})
export class ErrorLogoModule {}
