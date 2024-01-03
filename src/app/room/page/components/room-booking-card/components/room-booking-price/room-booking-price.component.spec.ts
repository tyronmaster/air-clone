import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingPriceComponent } from './room-booking-price.component';

describe('RoomBookingPriceComponent', () => {
  let component: RoomBookingPriceComponent;
  let fixture: ComponentFixture<RoomBookingPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomBookingPriceComponent]
    });
    fixture = TestBed.createComponent(RoomBookingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
