import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingFormComponent } from './room-booking-form.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { RoomBookingDateModule } from './components/room-booking-date/room-booking-date.module';
import { RoomBookingGuestModule } from './components/room-booking-guest/room-booking-guest.module';
import { RoomBookingDialogModule } from '../room-booking-dialog/room-booking-dialog.module';
import { FormsSharedModule } from 'src/app/core/forms/shared';

NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsSharedModule,
    ReactiveFormsModule,
    RoomBookingDialogModule,
    RoomBookingDateModule,
    RoomBookingGuestModule,
  ],
  declarations: [RoomBookingFormComponent],
  exports: [RoomBookingFormComponent],
})
export class RoomBookingFormModule {}
