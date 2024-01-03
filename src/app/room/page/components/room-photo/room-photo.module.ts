import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomPhotoComponent } from './room-photo.component';
import { CarouselModule } from 'src/app/ui/carousel/carousel.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/ui/shared';
import { RoomPhotosDialogModule } from './room-photos-dialog/room-photos-dialog.module';
import { RoomSharedModule } from 'src/app/room/shared/room-shared.module';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    RoomPhotosDialogModule,
    RoomSharedModule,
    SharedModule,
  ],
  declarations: [RoomPhotoComponent],
  exports: [RoomPhotoComponent],
})
export class RoomPhotoModule {}
