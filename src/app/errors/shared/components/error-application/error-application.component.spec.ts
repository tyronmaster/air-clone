import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorApplicationComponent } from './error-application.component';

describe('ErrorApplicationComponent', () => {
  let component: ErrorApplicationComponent;
  let fixture: ComponentFixture<ErrorApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorApplicationComponent]
    });
    fixture = TestBed.createComponent(ErrorApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
