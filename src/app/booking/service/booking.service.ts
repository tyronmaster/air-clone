import { Building } from 'src/app/building/common';
import { Room } from 'src/app/room/common';
import { BookingDetails, BookingVariant } from '../common';
import { MapMarkerConfig } from 'src/app/maps/common/map-marker-config';
import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BuildingFacade } from 'src/app/building/state/building.facade';
import { RoomFacade } from 'src/app/room/state/room.facade';
import { BookingFacade } from '../state/booking.facade';

export function getFirstRoomOnBuilding(building: Building, rooms: Room[]): Room | null {
  const firstRoomId = building.rooms.length ? building.rooms[0] : null;

  return firstRoomId ? rooms.find((room) => room.id === firstRoomId) ?? null : null;
}

export function castMapMarkerConfigs(bookingVariants: BookingVariant[]): MapMarkerConfig[] {
  return bookingVariants
    .filter((bookingVariant) => bookingVariant.rooms.length)
    .map((bookingVariant) => ({
      data: bookingVariant,
      lat: bookingVariant.lat,
      lng: bookingVariant.lng,
      label: {
        className: 'google-map-marker',
        text: bookingVariant.firstRoom?.price.toString() ?? '',
        fontWeight: 'bold',
      },
    }));
}

@Injectable()
export class BookingService {
  constructor(
    private readonly buildingFacade: BuildingFacade,
    private readonly roomFacade: RoomFacade,
    private readonly bookingFacade: BookingFacade,
  ) {}

  bookingVariant$: Observable<BookingVariant> = this.bookingFacade.bookingVariant$.pipe(filter<any>(Boolean));

  bookingVariants$: Observable<BookingVariant[]> = combineLatest([
    this.buildingFacade.buildings$.pipe(filter<any>(Boolean)),
    this.roomFacade.rooms$.pipe(filter<any>(Boolean)),
  ]).pipe(
    map(([buildings, rooms]: [Building[], Room[]]) =>
      buildings
        .filter((building) => building.rooms.length)
        .map((building) => ({ ...building, firstRoom: getFirstRoomOnBuilding(building, rooms) })),
    ),
  );

  bookingDetails$: Observable<BookingDetails> = this.bookingFacade.bookingDetails$.pipe(filter<any>(Boolean));

  mapMarkers$: Observable<MapMarkerConfig[]> = this.bookingVariants$.pipe(map(castMapMarkerConfigs));

  setBookingVariant(bookingVariant: BookingVariant): void {
    this.bookingFacade.setBookingVariant(bookingVariant);
  }

  setBookingDetails(bookingDetails: BookingDetails): void {
    this.bookingFacade.setBookingDetails(bookingDetails);
  }

  clearBookingVariant(): void {
    this.bookingFacade.clearBookingVariant();
  }

  clearBookingDetails(): void {
    this.bookingFacade.clearBookingDetails();
  }
}
