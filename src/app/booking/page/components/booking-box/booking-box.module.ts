import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingBoxComponent } from './booking-box.component';
import { RouterModule } from '@angular/router';
import { BookingSharedModule } from 'src/app/booking/shared';
import { SharedModule } from 'src/app/ui/shared';

@NgModule({
  imports: [CommonModule, RouterModule, BookingSharedModule, SharedModule],
  declarations: [BookingBoxComponent],
  exports: [BookingBoxComponent],
})
export class BookingBoxModule {}
