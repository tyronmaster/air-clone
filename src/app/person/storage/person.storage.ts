import { Injectable } from '@angular/core';
import { PersonDto, PersonEntity } from '../common/person.interface.ts';
import { LocalStorage } from 'src/app/core/storage/storages/local.storage.js';
import { Observable, map } from 'rxjs';
import { PERSONS_DTO_STUB } from './person.stub.js';

const PERSON_STORAGE_KEY = 'person';

export function castPersonEntity(person: PersonDto): PersonEntity {
  return {
    ...person,
    personRemoveRun: false,
    personRemoveError: null,
    personChangeRun: false,
    personChangeError: null,
    personBuildingRemoveRun: false,
    personBuildingRemoveError: null,
    personBuildingAddRun: false,
    personBuildingAddError: null,
  };
}
export function castPersonDto<T extends PersonEntity = PersonEntity>({
  id,
  firstName,
  lastName,
  middleName,
  phone,
  buildings,
  created,
  updated,
  avatar,
}: T): PersonDto {
  return {
    id,
    firstName,
    lastName,
    middleName,
    phone,
    buildings,
    created,
    updated,
    avatar,
  };
}

@Injectable()
export class PersonStorage {
  constructor(private readonly localStorage: LocalStorage) {}

  clear(): void {
    this.localStorage.setItem(PERSON_STORAGE_KEY, []);
  }

  get(): Observable<PersonDto[]> {
    return this.localStorage
      .getItem<PersonDto[] | null>(PERSON_STORAGE_KEY)
      .pipe(map((persons) => (persons ?? PERSONS_DTO_STUB).map(castPersonEntity)));
  }

  post(persons: PersonEntity[] | null): void {
    this.localStorage.setItem(PERSON_STORAGE_KEY, persons?.map(castPersonDto));
  }

  reset(): void {
    this.localStorage.setItem(PERSON_STORAGE_KEY, PERSONS_DTO_STUB);
  }
}
