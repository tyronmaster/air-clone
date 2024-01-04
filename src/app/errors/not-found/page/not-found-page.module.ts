import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';
import { ErrorsSharedModule } from '../../shared/errors-shared.module';



@NgModule({
  imports: [CommonModule, NotFoundPageRoutingModule, ErrorsSharedModule],
  declarations: [NotFoundPageComponent],
})
export class NotFoundPageModule {}
