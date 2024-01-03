import { NgModule } from '@angular/core';

import { BookingPageComponent } from './booking-page.component';

import { BookingPageRoutingModule } from './booking-page-routing.module';
import { CommonModule } from '@angular/common';
import { BookingMapModule } from './components/booking-map/booking-map.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookingServiceModule } from '../service';
import { BookingStateModule } from '../state';
import { AppCommonModule } from 'src/app/app-common/app-common.module';
import { BookingListModule } from './components/booking-list/booking-list.module';
import { GridModule } from 'src/app/ui/grid';
import { BookingCardModule } from './components/booking-card/booking-card.module';
import { BookingBoxModule } from './components/booking-box/booking-box.module';
import { ContainerModule } from 'src/app/ui/container';

@NgModule({
  declarations: [BookingPageComponent],
  imports: [
    CommonModule,
    BookingPageRoutingModule,
    AppCommonModule,
    BookingMapModule,
    BookingListModule,
    BookingCardModule,
    BookingBoxModule,
    BookingServiceModule,
    BookingStateModule,
    MatIconModule,
    MatButtonModule,
    GridModule,
    ContainerModule,
  ],
  exports: [BookingPageRoutingModule],
})
export class BookingPageModule {}
