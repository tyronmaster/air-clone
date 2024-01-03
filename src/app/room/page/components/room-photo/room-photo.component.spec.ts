import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPhotoComponent } from './room-photo.component';

describe('RoomPhotoComponent', () => {
  let component: RoomPhotoComponent;
  let fixture: ComponentFixture<RoomPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomPhotoComponent]
    });
    fixture = TestBed.createComponent(RoomPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
