import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTitleComponent } from './error-title.component';

describe('ErrorTitleComponent', () => {
  let component: ErrorTitleComponent;
  let fixture: ComponentFixture<ErrorTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorTitleComponent]
    });
    fixture = TestBed.createComponent(ErrorTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
