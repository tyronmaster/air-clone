import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingDialogComponent } from './room-booking-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  declarations: [RoomBookingDialogComponent],
  exports: [RoomBookingDialogComponent],
})
export class RoomBookingDialogModule {}
