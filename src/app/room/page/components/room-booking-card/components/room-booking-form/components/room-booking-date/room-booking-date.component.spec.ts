import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingDateComponent } from './room-booking-date.component';

describe('RoomBookingDateComponent', () => {
  let component: RoomBookingDateComponent;
  let fixture: ComponentFixture<RoomBookingDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomBookingDateComponent]
    });
    fixture = TestBed.createComponent(RoomBookingDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
