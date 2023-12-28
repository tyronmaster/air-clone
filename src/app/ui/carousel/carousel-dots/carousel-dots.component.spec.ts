import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDotsComponent } from './carousel-dots.component';

describe('CarouselDotsComponent', () => {
  let component: CarouselDotsComponent;
  let fixture: ComponentFixture<CarouselDotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselDotsComponent]
    });
    fixture = TestBed.createComponent(CarouselDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
