import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as RoomActions from './room.actions';
import { RoomStorage } from '../storage/room.storage';
import { fetch } from '../../core/store/utils';

@Injectable()
export class RoomEffects {
  loadRooms$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RoomActions.loadRooms),
      fetch({
        id: () => 'load-rooms',
        run: () => this.roomStorage.get().pipe(map((payload) => RoomActions.loadRoomsSuccess({ payload }))),
        onError: (action, payload) => RoomActions.loadRoomsFailure({ payload }),
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private readonly roomStorage: RoomStorage,
  ) {}
}
