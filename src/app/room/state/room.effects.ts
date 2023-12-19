import { Injectable } from '@angular/core';
import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
import * as RoomActions from './room.actions';
import * as RoomSelectors from './room.selectors';
import { RoomStorage } from '../storage/room.storage';
import { fetch } from '../../core/store/utils';
import { select, Store, Action } from '@ngrx/store';
import { createRoomFromNewRoom } from '../common/room.util';
import { EnvironmentService } from 'src/app/core/environments/environment.service';

@Injectable()
export class RoomEffects implements OnInitEffects {
  loadRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.loadRooms),
      fetch({
        id: () => 'load-rooms',
        run: () => this.roomStorage.get().pipe(map((payload) => RoomActions.loadRoomsSuccess({ payload }))),
        onError: (action, payload) => RoomActions.loadRoomsFailure({ payload }),
      })
    )
  );

  addRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.addRoom),
      withLatestFrom(this.store.pipe(select(RoomSelectors.selectRooms))),
      fetch({
        id: () => 'add-room',
        run: (action, rooms) => RoomActions.addRoomSuccess({ payload: createRoomFromNewRoom(rooms ?? [], action.payload) }),
        onError: (action, payload) => RoomActions.addRoomFailure({ payload }),
      })
    )
  );

  removeRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.removeRoom),
      withLatestFrom(this.store.pipe(select(RoomSelectors.selectRoomsEntities))),
      fetch({
        id: (action) => `remove-room-${action.payload.id}`,
        run: (action, roomsEntities) => {
          const room = roomsEntities ? roomsEntities[action.payload.id] : null;

          return room ? RoomActions.removeRoomSuccess({ payload: action.payload }) : RoomActions.removeRoomCancel();
        },
        onError: (action, error) => RoomActions.removeRoomFailure({ payload: { ...error, id: action.payload.id } }),
      })
    )
  );

  changeRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.changeRoom),
      fetch({
        id: () => 'change-room',
        run: (action) => RoomActions.changeRoomSuccess({ payload: action.payload }),
        onError: (action, payload) => RoomActions.changeRoomFailure({ payload }),
      })
    )
  );

  removeRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.removeRooms),
      fetch({
        id: () => 'remove-rooms',
        run: (action) => RoomActions.removeRoomsSuccess({ payload: action.payload }),
        onError: (action, payload) => RoomActions.removeRoomsFailure({ payload: { ...payload, rooms: action.payload } }),
      })
    )
  );

  localStorageSync$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        RoomActions.addRoomSuccess,
        RoomActions.removeRoomSuccess,
        RoomActions.removeRoomsSuccess,
        RoomActions.changeRoomSuccess,
        RoomActions.clearRooms
      ),
      withLatestFrom(this.store.pipe(select(RoomSelectors.selectRooms))),
      fetch({
        id: (action) => `local-storage-sync-rooms-${action.type}`,
        run: (action, rooms) => {
          if (this.environmentService.getEnvironments().localStorageSync) {
            this.roomStorage.post(rooms ?? []);
          }
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly roomStorage: RoomStorage,
    private readonly environmentService: EnvironmentService
  ) {}

  ngrxOnInitEffects(): Action {
    return RoomActions.loadRooms();
  }
}
