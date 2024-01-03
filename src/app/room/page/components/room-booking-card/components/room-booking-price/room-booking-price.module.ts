import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingPriceComponent } from './room-booking-price.component';
import { MatButtonModule } from '@angular/material/button';
import { NumeralSharedModule } from 'src/app/core/numerals/shared';
import { RoomBookingPriceService } from './room-booking-price.service';

@NgModule({
  imports: [CommonModule, MatButtonModule, NumeralSharedModule],
  declarations: [RoomBookingPriceComponent],
  exports: [RoomBookingPriceComponent],
  providers: [RoomBookingPriceService],
})
export class RoomBookingPriceModule {}
