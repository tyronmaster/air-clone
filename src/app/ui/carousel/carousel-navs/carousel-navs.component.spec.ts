import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNavsComponent } from './carousel-navs.component';

describe('CarouselNavsComponent', () => {
  let component: CarouselNavsComponent;
  let fixture: ComponentFixture<CarouselNavsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselNavsComponent]
    });
    fixture = TestBed.createComponent(CarouselNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
