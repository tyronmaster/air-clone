import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromBooking from './booking.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookingEffects } from './booking.effects';
import { reducer } from './booking.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(fromBooking.BOOKING_FEATURE_KEY, reducer), EffectsModule.forFeature([BookingEffects])],
})
export class BookingStateModule {}
