import { Injectable } from '@angular/core';
import { RoomState } from './room.reducer';
import { Action, Store, select } from '@ngrx/store';
import * as RoomSelectors from './room.selectors';
import * as RoomActions from './room.actions';
import { Entity } from '@app/core/common';
import { ofType, Actions } from '@ngrx/effects';
import { Observable, map } from 'rxjs';
import { Room, NewRoom, ChangedRoom } from '../common';

@Injectable()
export class RoomFacade {
  rooms$: Observable<Room[]> = this.store.pipe(select(RoomSelectors.selectRooms));

  roomsLoadError$ = this.store.pipe(select(RoomSelectors.selectRoomsLoadError));

  roomsLoadRun$ = this.store.pipe(select(RoomSelectors.selectRoomsLoadRun));

  roomAdded$: Observable<Room> = this.actions.pipe(
    ofType(RoomActions.addRoomSuccess),
    map((action) => action.payload)
  );

  roomChanged$ = this.actions.pipe(
    ofType(RoomActions.changeRoomSuccess),
    map((action) => action.payload)
  );

  room$ = (id: number): Observable<Room | null> => this.store.pipe(select(RoomSelectors.selectRoom({ id })));

  roomsByBuilding$ = (id: number): Observable<Room[]> => this.store.pipe(select(RoomSelectors.selectRoomsByBuilding({ id })));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly actions: Actions, private readonly store: Store<RoomState>) {}

  clear(): void {
    this.dispatch(RoomActions.clearRooms());
  }

  load(): void {
    this.dispatch(RoomActions.loadRooms());
  }

  removeRoom(payload: Entity): void {
    this.dispatch(RoomActions.removeRoom({ payload }));
  }

  removeRooms(payload: number[]): void {
    this.dispatch(RoomActions.removeRooms({ payload }));
  }

  addRoom(payload: NewRoom): void {
    this.dispatch(RoomActions.addRoom({ payload }));
  }

  changeRoom(payload: ChangedRoom): void {
    this.dispatch(RoomActions.changeRoom({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
