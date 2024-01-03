import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHeaderComponent } from './room-header.component';

describe('RoomHeaderComponent', () => {
  let component: RoomHeaderComponent;
  let fixture: ComponentFixture<RoomHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHeaderComponent]
    });
    fixture = TestBed.createComponent(RoomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
