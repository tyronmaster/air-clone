import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsSharedModule } from 'src/app/maps/shared/google-maps-shared.module';
import { BookingMapComponent } from './booking-map.component';

@NgModule({
  declarations: [BookingMapComponent],
  imports: [CommonModule, GoogleMapsSharedModule],
  exports: [BookingMapComponent],
})
export class BookingMapModule {}
