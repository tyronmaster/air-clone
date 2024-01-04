import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHintComponent } from './error-hint.component';

describe('ErrorHintComponent', () => {
  let component: ErrorHintComponent;
  let fixture: ComponentFixture<ErrorHintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorHintComponent]
    });
    fixture = TestBed.createComponent(ErrorHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
