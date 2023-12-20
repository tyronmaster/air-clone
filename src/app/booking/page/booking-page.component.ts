import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Room } from '../../room/common';
import { RoomService } from '../../room/service';
import { RoomFacade } from '../../room/state';

@Component({
  selector: 'app-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingPageComponent implements OnInit {
  rooms$!: Observable<Room[]>;

  constructor(private readonly roomFacade: RoomFacade, private readonly roomService: RoomService) {}

  ngOnInit(): void {
    this.roomFacade.load();

    this.rooms$ = this.roomService.rooms$;
  }
}
