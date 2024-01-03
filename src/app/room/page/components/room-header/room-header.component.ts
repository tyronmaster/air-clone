import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoomExtended } from '../../../manager';
import { NavigationService } from 'src/app/core/navigation/service';
import { NavigationPath } from 'src/app/core/navigation/common';

@Component({
  selector: 'app-room-header',
  templateUrl: './room-header.component.html',
  styleUrls: ['./room-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomHeaderComponent {
  @Input() room!: RoomExtended;

  constructor(private readonly navigationService: NavigationService) {}

  onBack(): void {
    void this.navigationService.navigateByUrl(NavigationPath.Home);
  }
}
