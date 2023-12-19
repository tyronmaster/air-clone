import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromRoom from './room.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RoomEffects } from './room.effects';
import { RoomStorageModule } from '../storage/room-storage.module';
import { reducer } from './room.reducer';
import { RoomFacade } from './room.facade';

@NgModule({
  imports: [RoomStorageModule,
    StoreModule.forFeature(fromRoom.ROOM_FEATURE_KEY, reducer),
    EffectsModule.forFeature([RoomEffects])],
    providers: [RoomFacade],
})
export class RoomStateModule {}
