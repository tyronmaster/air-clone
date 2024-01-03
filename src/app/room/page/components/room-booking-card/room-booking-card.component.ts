import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoomExtended } from 'src/app/room/manager';

@Component({
  selector: 'app-room-booking-card',
  templateUrl: './room-booking-card.component.html',
  styleUrls: ['./room-booking-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomBookingCardComponent {
  @Input() room!: RoomExtended;
}
