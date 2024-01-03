import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingCardComponent } from './room-booking-card.component';

describe('RoomBookingCardComponent', () => {
  let component: RoomBookingCardComponent;
  let fixture: ComponentFixture<RoomBookingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomBookingCardComponent]
    });
    fixture = TestBed.createComponent(RoomBookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
