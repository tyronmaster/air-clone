import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLinksComponent } from './error-links.component';

describe('ErrorLinksComponent', () => {
  let component: ErrorLinksComponent;
  let fixture: ComponentFixture<ErrorLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorLinksComponent]
    });
    fixture = TestBed.createComponent(ErrorLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
