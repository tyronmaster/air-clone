import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoomExtended } from 'src/app/room/manager';

@Component({
  selector: 'app-room-person',
  templateUrl: './room-person.component.html',
  styleUrls: ['./room-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomPersonComponent {
  @Input() room!: RoomExtended;
}
