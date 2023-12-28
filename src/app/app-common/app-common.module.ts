import { NgModule } from '@angular/core';
import { RoomServiceModule } from '../room/service';
import { RoomStateModule } from '../room/state';
import { BuildingStateModule } from '../building/state/building-state.module';
import { PersonStateModule } from '../person/state/person-state.module';

@NgModule({
  imports: [
    RoomServiceModule,
    RoomStateModule,
    // BuildingServiceModule,
    BuildingStateModule,
    // PersonServiceModule,
    PersonStateModule,
  ],
})
export class AppCommonModule {}
