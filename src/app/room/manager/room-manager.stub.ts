import { BUILDING_STUB } from '../../building/state';
import { PERSON_STUB } from '../../person/state';
import { ROOM_STUB } from '../state';

import { RoomExtended } from './room.manager';

export const ROOM_EXTENDED_STUB: RoomExtended = {
  ...ROOM_STUB,
  buildingExtended: { ...BUILDING_STUB, personExtended: PERSON_STUB },
};

export const ROOMS_EXTENDED_STUB: RoomExtended[] = [ROOM_EXTENDED_STUB];
