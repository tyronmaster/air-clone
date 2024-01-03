import { NgModule } from '@angular/core';

import { BuildingStateModule } from '../building/state/building-state.module';
import { PersonServiceModule } from '../person/service';
import { PersonStateModule } from '../person/state';
import { RoomServiceModule } from '../room/service';
import { RoomStateModule } from '../room/state';
import { BuildingServiceModule } from '../building/service';

@NgModule({
  imports: [RoomServiceModule, RoomStateModule, BuildingServiceModule, BuildingStateModule, PersonServiceModule, PersonStateModule],
})
export class AppCommonModule {}
