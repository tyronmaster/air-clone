import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSlideComponent } from './carousel-slide.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [CarouselSlideComponent],
  imports: [CommonModule, SharedModule],
  exports: [CarouselSlideComponent],
})
export class CarouselSlideModule {}
