import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';

import { MockComponents } from 'ng-mocks';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LayoutComponent, MockComponents(HeaderComponent, FooterComponent, MainComponent)],
    }).compileComponents();

    beforeEach(() => {
      fixture = TestBed.createComponent(LayoutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
