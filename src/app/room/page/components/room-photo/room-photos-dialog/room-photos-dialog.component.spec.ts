import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPhotosDialogComponent } from './room-photos-dialog.component';

describe('RoomPhotosDialogComponent', () => {
  let component: RoomPhotosDialogComponent;
  let fixture: ComponentFixture<RoomPhotosDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomPhotosDialogComponent]
    });
    fixture = TestBed.createComponent(RoomPhotosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
