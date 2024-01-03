import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingDialogComponent } from './room-booking-dialog.component';

describe('RoomBookingDialogComponent', () => {
  let component: RoomBookingDialogComponent;
  let fixture: ComponentFixture<RoomBookingDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomBookingDialogComponent]
    });
    fixture = TestBed.createComponent(RoomBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
