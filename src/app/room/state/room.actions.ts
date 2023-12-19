import { createAction } from '@ngrx/store';
import { Room } from '../common/room.interface';
import { payload } from 'src/app/core/store/utils';

export const loadRooms = createAction('[Room] Load Rooms');

export const loadRoomsSuccess = createAction('[Room] Load Rooms Success', payload<Room[]>());

export const loadRoomsFailure = createAction('[Room] Load Rooms Failure', payload<Record<string, any>>());
