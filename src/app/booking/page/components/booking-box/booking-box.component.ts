import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingVariant } from 'src/app/booking/common';
import { BookingService } from 'src/app/booking/service';

import { NavigationPath } from 'src/app/core/navigation/common';
import { NavigationService } from 'src/app/core/navigation/service';

@Component({
  selector: 'app-booking-box',
  templateUrl: './booking-box.component.html',
  styleUrls: ['./booking-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingBoxComponent implements OnInit {
  bookingVariant$!: Observable<BookingVariant>;

  constructor(
    private readonly bookingService: BookingService,
    private readonly navigationService: NavigationService,
  ) {}

  ngOnInit(): void {
    this.bookingVariant$ = this.bookingService.bookingVariant$;
  }

  onClick(bookingVariant: BookingVariant): void {
    if (bookingVariant.firstRoom?.id) {
      void this.navigationService.navigateByUrl(NavigationPath.RoomPage, { id: bookingVariant.firstRoom?.id });
    }
  }
}
