import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import { BookingDetails, BookingVariant } from '../common';

import * as BookingActions from './booking.actions';
import { BookingState } from './booking.reducer';
import * as BookingSelectors from './booking.selectors';

@Injectable()
export class BookingFacade {
  constructor(private store: Store<BookingState>) {}

  bookingVariant$ = this.store.pipe(select(BookingSelectors.selectBookingVariant));

  bookingDetails$ = this.store.pipe(select(BookingSelectors.selectBookingDetails));

  setBookingVariant(payload: BookingVariant) {
    this.dispatch(BookingActions.setBookingVariant({ payload }));
  }

  setBookingDetails(payload: BookingDetails) {
    this.dispatch(BookingActions.setBookingDetails({ payload }));
  }

  clearBookingVariant() {
    this.dispatch(BookingActions.clearBookingVariant());
  }

  clearBookingDetails() {
    this.dispatch(BookingActions.clearBookingDetails());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
