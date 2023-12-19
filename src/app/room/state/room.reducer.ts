import { createReducer, on } from '@ngrx/store';
import * as RoomActions from './room.actions';
import { Room } from '../common/room.interface';

export const ROOM_FEATURE_KEY = 'rooms';

export interface RoomState {
  rooms: Room[] | null;
  roomsLoadError: Record<string, any> | null;
}

export interface RoomPartialState {
  readonly [ROOM_FEATURE_KEY]: RoomState;
}

export const roomInitialState: RoomState = {
  rooms: null,
  roomsLoadError: null,
};

export const reducer = createReducer(
  roomInitialState,
  on(RoomActions.loadRooms, (state) => ({
    ...state,
    roomsLoadError: null,
  })),
  on(RoomActions.loadRoomsSuccess, (state, { payload }) => ({
    ...state,
    rooms: payload,
  })),
  on(RoomActions.loadRoomsFailure, (state, { payload }) => ({
    ...state,
    roomsLoadError: { payload },
  })),
);
