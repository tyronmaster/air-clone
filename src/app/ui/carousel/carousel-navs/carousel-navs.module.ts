import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselNavsComponent } from './carousel-navs.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [CarouselNavsComponent],
  exports: [CarouselNavsComponent],
})
export class CarouselNavsModule {}
