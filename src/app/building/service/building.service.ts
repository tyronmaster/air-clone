import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Building } from '../common';
import { BuildingFacade } from '../state';

@Injectable()
export class BuildingService {
  buildings$: Observable<Building[]> = this.buildingFacade.buildings$.pipe(filter<any>(Boolean));

  building$ = (id: number): Observable<Building> => this.buildingFacade.building$(id).pipe(filter<any>(Boolean));

  buildingsByPerson$ = (id: number): Observable<Building[]> => this.buildingFacade.buildingsByPerson$(id).pipe(filter<any>(Boolean));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly buildingFacade: BuildingFacade) {}

  clear(): void {
    this.buildingFacade.clear();
  }
}
