import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoomExtended } from 'src/app/room/manager';

@Component({
  selector: 'app-room-description',
  templateUrl: './room-description.component.html',
  styleUrls: ['./room-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomDescriptionComponent {
  @Input() room!: RoomExtended;
}
