import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPortletComponent } from './booking-portlet.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BookingSharedModule } from 'src/app/booking/shared';
import { NavigationSharedModule } from 'src/app/core/navigation/shared';
import { CarouselModule } from 'src/app/ui/carousel/carousel.module';
import { GridModule } from 'src/app/ui/grid';

@NgModule({
  imports: [CommonModule, CarouselModule, BookingSharedModule, MatButtonModule, RouterModule, NavigationSharedModule, GridModule],
  declarations: [BookingPortletComponent],
  exports: [BookingPortletComponent],
})
export class BookingPortletModule {}
