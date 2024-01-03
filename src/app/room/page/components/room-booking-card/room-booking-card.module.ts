import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingCardComponent } from './room-booking-card.component';
import { RoomBookingPriceModule } from './components/room-booking-price/room-booking-price.module';
import { MatButtonModule } from '@angular/material/button';
import { NumeralSharedModule } from 'src/app/core/numerals/shared';
import { RoomBookingFormModule } from './components/room-booking-form/room-booking-form.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    NumeralSharedModule,
    RoomBookingFormModule,
    RoomBookingPriceModule
  ],
  declarations: [RoomBookingCardComponent],
  exports: [RoomBookingCardComponent],
})
export class RoomBookingCardModule {}
