import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BookingServiceModule } from '../../booking/service';

import { AppCommonModule } from '../../app-common/app-common.module';
import { RoomPageComponent } from './room-page.component';
import { RoomPageRoutingModule } from './room-page-routing.module';
import { BookingStateModule } from 'src/app/booking/state';
import { ContainerModule } from 'src/app/ui/container';
import { GridModule } from 'src/app/ui/grid';
import { RoomDetailsModule } from './components/room-details/room-details.module';
import { RoomManagerModule } from '../manager';
import { RoomHeaderModule } from './components/room-header/room-header.module';
import { RoomPhotoModule } from './components/room-photo/room-photo.module';
import { RoomPersonModule } from './components/room-person/room-person.module';
import { RoomPropsModule } from './components/room-props/room-props.module';
import { RoomFeaturesModule } from './components/room-features/room-features.module';
import { RoomDescriptionModule } from './components/room-description/room-description.module';
import { RoomBookingCardModule } from './components/room-booking-card/room-booking-card.module';

@NgModule({
  imports: [
    CommonModule,
    RoomPageRoutingModule,
    AppCommonModule,
    BookingServiceModule,
    BookingStateModule,
    RoomManagerModule,
    ContainerModule,
    MatIconModule,
    MatButtonModule,
    RoomPropsModule,
    RoomPhotoModule,
    RoomHeaderModule,
    RoomDetailsModule,
    RoomPersonModule,
    RoomFeaturesModule,
    RoomDescriptionModule,
    RoomBookingCardModule,
    GridModule,
  ],
  declarations: [RoomPageComponent],
})
export class RoomPageModule {}
