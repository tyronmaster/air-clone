import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Room } from '../common';
import { RoomFacade } from '../state';

@Injectable()
export class RoomService {
  rooms$: Observable<Room[]> = this.roomFacade.rooms$.pipe(filter<Room[]>(Boolean));

  room$ = (id: number): Observable<Room> => this.roomFacade.room$(id).pipe(filter<any>(Boolean));

  roomsByBuilding$ = (id: number): Observable<Room> => this.roomFacade.roomsByBuilding$(id).pipe(filter<any>(Boolean));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly roomFacade: RoomFacade) {}
}
