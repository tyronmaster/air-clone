import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingCardComponent } from './booking-card.component';
import { CarouselModule } from 'src/app/ui/carousel/carousel.module';
import { BookingSharedModule } from 'src/app/booking/shared';

@NgModule({
  declarations: [BookingCardComponent],
  imports: [CommonModule, CarouselModule, BookingSharedModule],
  exports: [BookingCardComponent],
})
export class BookingCardModule {}
