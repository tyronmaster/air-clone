import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMapComponent } from './booking-map.component';

describe('BookingMapComponent', () => {
  let component: BookingMapComponent;
  let fixture: ComponentFixture<BookingMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingMapComponent]
    });
    fixture = TestBed.createComponent(BookingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
