import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingGuestComponent } from './room-booking-guest.component';

describe('RoomBookingGuestComponent', () => {
  let component: RoomBookingGuestComponent;
  let fixture: ComponentFixture<RoomBookingGuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomBookingGuestComponent]
    });
    fixture = TestBed.createComponent(RoomBookingGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
