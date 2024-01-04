import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogoComponent } from './error-logo.component';

describe('ErrorLogoComponent', () => {
  let component: ErrorLogoComponent;
  let fixture: ComponentFixture<ErrorLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorLogoComponent]
    });
    fixture = TestBed.createComponent(ErrorLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
