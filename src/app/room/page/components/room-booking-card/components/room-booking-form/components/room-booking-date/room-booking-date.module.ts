import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingDateComponent } from './room-booking-date.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, ReactiveFormsModule],
  declarations: [RoomBookingDateComponent],
  exports: [RoomBookingDateComponent],
})
export class RoomBookingDateModule {}
