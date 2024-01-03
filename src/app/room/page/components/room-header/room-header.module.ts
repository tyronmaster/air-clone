import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomHeaderComponent } from './room-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [RoomHeaderComponent],
  exports: [RoomHeaderComponent],
})
export class RoomHeaderModule {}
