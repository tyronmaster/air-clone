import { TestBed } from '@angular/core/testing';

import { RoomBookingPriceService } from './room-booking-price.service';

describe('RoomBookingPriceService', () => {
  let service: RoomBookingPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomBookingPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
