import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDescriptionComponent } from './room-description.component';

describe('RoomDescriptionComponent', () => {
  let component: RoomDescriptionComponent;
  let fixture: ComponentFixture<RoomDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomDescriptionComponent]
    });
    fixture = TestBed.createComponent(RoomDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
