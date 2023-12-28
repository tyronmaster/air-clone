import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselSlideModule } from './carousel-slide/carousel-slide.module';
import { CarouselDotsModule } from './carousel-dots/carousel-dots.module';
import { CarouselNavsModule } from './carousel-navs/carousel-navs.module';

@NgModule({
  imports: [CommonModule, CarouselSlideModule, CarouselDotsModule, CarouselNavsModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
})
export class CarouselModule {}
