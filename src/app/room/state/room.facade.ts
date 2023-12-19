import { Injectable } from '@angular/core';
import { RoomState } from './room.reducer';
import { Action, Store, select } from '@ngrx/store';
import * as RoomSelectors from './room.selectors';
import * as RoomActions from './room.actions';

@Injectable()
export class RoomFacade {
  constructor(private readonly store: Store<RoomState>) {}

  room$ = this.store.pipe(select(RoomSelectors.selectRooms));
  roomLoadError$ = this.store.pipe(select(RoomSelectors.selectRoomsLoadError));

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadRooms():void{
    this.dispatch(RoomActions.loadRooms())
  }
}
