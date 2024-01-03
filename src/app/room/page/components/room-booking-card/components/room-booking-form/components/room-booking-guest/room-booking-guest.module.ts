import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingGuestComponent } from './room-booking-guest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  declarations: [RoomBookingGuestComponent],
  exports: [RoomBookingGuestComponent],
})
export class RoomBookingGuestModule {}
