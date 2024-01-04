import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLinksComponent } from './error-links.component';
import { RouterModule } from '@angular/router';
import { NavigationSharedModule } from 'src/app/core/navigation/shared';


@NgModule({
  imports: [RouterModule, NavigationSharedModule],
  declarations: [ErrorLinksComponent],
  exports: [ErrorLinksComponent],
})
export class ErrorLinksModule {}
