import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carousel-navs',
  templateUrl: './carousel-navs.component.html',
  styleUrls: ['./carousel-navs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselNavsComponent {
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();

  onPrev() {
    this.prev.emit();
  }

  onNext() {
    this.next.emit();
  }
}
