import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomFeaturesComponent } from './room-features.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [RoomFeaturesComponent],
  exports: [RoomFeaturesComponent]
})
export class RoomFeaturesModule {}
