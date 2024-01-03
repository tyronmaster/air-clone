import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPersonComponent } from './room-person.component';

describe('RoomPersonComponent', () => {
  let component: RoomPersonComponent;
  let fixture: ComponentFixture<RoomPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomPersonComponent]
    });
    fixture = TestBed.createComponent(RoomPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
