import { NgModule } from '@angular/core';

import { BookingPageComponent } from './booking-page.component';

import { BookingPageRoutingModule } from './booking-page-routing.module';
import { CommonModule } from '@angular/common';
import { RoomStateModule } from 'src/app/room/state';
import { RoomServiceModule } from 'src/app/room/service';

@NgModule({
  declarations: [BookingPageComponent],
  imports: [CommonModule, BookingPageRoutingModule, RoomStateModule, RoomServiceModule],
  exports: [BookingPageRoutingModule]
})
export class BookingPageModule {}
