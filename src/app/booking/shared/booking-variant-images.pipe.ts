import { Pipe, PipeTransform } from '@angular/core';

import { BookingVariant } from '../common';

@Pipe({
  name: 'bookingVariantImages',
})
export class BookingVariantImagesPipe implements PipeTransform {
  transform(bookingVariant: BookingVariant): string[] {
    return bookingVariant.firstRoom?.photos ?? [];
  }
}
