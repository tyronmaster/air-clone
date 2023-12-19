import { Injectable } from '@angular/core';
import { BuildingDto, BuildingEntity } from '../common/building.interface';
import { LocalStorage } from 'src/app/core/storage/storages/local.storage';
import { Observable, map } from 'rxjs';
import { BUILDINGS_DTO_STUB } from './building.stub';

const BUILDINGS_STORGE_KEY = 'buildings';

export function castBuildingEntity(building: BuildingDto): BuildingEntity {
  return {
    ...building,
    buildingRemoveRun: false,
    buildingRemoveError: null,
    buildingChangeRun: false,
    buildingChangeError: null,
    buildingRoomRemoveRun: false,
    buildingRoomRemoveError: null,
    buildingRoomAddRun: false,
    buildingRoomAddError: null,
  };
}

export function castBuildingDto<T extends BuildingEntity = BuildingEntity>({
  id,
  name,
  rooms,
  person,
  city,
  address,
  created,
  updated,
  lat,
  lng,
}: T): BuildingDto {
  return {
    id,
    name,
    rooms,
    person,
    city,
    address,
    created,
    updated,
    lat,
    lng,
  };
}

@Injectable()
export class BuildingStorage {
  constructor(private readonly localStorage: LocalStorage) {}

  clear() {
    this.localStorage.setItem(BUILDINGS_STORGE_KEY, []);
  }

  get(): Observable<BuildingEntity[]> {
    return this.localStorage
      .getItem<BuildingDto[] | null>(BUILDINGS_STORGE_KEY)
      .pipe(map((buildings) => (buildings ?? BUILDINGS_DTO_STUB).map(castBuildingEntity)));
  }

  post(buildings: BuildingEntity[] | null): void {
    this.localStorage.setItem(BUILDINGS_STORGE_KEY, buildings?.map(castBuildingDto));
  }

  reset(): void {
    this.localStorage.setItem(BUILDINGS_STORGE_KEY, BUILDINGS_DTO_STUB);
  }
}
