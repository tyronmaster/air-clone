import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Building } from '../../building/common';
import { BuildingFacade } from '../../building/state';
import { Person } from '../../person/common';
import { PersonFacade } from '../../person/state';
import { Room } from '../common';
import { RoomFacade } from '../state';

export interface RoomBuildingExtended extends Building {
  personExtended: Person;
}

export interface RoomExtended extends Room {
  buildingExtended: RoomBuildingExtended;
}

@Injectable()
export class RoomManager {
  roomsExtended$: Observable<RoomExtended[]> = this.roomFacade.rooms$.pipe(
    filter<Room[]>(Boolean),
    switchMap((rooms) =>
      rooms.length
        ? combineLatest(
            rooms.map((room) =>
              this.buildingFacade.building$(room.building).pipe(
                filter<any>(Boolean),
                switchMap((building: Building) =>
                  this.personFacade.person$(building.person).pipe(
                    filter<any>(Boolean),
                    map((person) => ({
                      ...room,
                      buildingExtended: {
                        ...building,
                        personExtended: person,
                      },
                    })),
                  ),
                ),
              ),
            ),
          )
        : of([]),
    ),
  );

  roomExtended$ = (id: number): Observable<RoomExtended> =>
    this.roomFacade.room$(id).pipe(
      filter<any>(Boolean),
      switchMap((room: Room) =>
        this.buildingFacade.building$(room.building).pipe(
          filter<any>(Boolean),
          switchMap((building: Building) =>
            this.personFacade.person$(building.person).pipe(
              filter<any>(Boolean),
              map((person: Person) => ({
                ...room,
                buildingExtended: {
                  ...building,
                  personExtended: person,
                },
              })),
            ),
          ),
        ),
      ),
    );

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    private readonly roomFacade: RoomFacade,
    private readonly buildingFacade: BuildingFacade,
    private readonly personFacade: PersonFacade,
  ) {}

  clear(): void {
    this.buildingFacade.clearBuildingsRooms();
    this.roomFacade.clear();
  }

  removeRoom(payload: Room): void {
    this.buildingFacade.removeBuildingRoom({ id: payload.building, room: payload.id });
    this.roomFacade.removeRoom(payload);
  }
}
