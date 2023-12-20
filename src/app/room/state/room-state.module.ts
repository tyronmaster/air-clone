import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RoomEffects } from './room.effects';
import { RoomStorageModule } from '../storage/room-storage.module';
import { ROOM_FEATURE_KEY, reducer } from './room.reducer';
import { RoomFacade } from './room.facade';

@NgModule({
  imports: [
    RoomStorageModule,
    StoreModule.forFeature(ROOM_FEATURE_KEY, reducer),
    EffectsModule.forFeature([RoomEffects]),
  ],
  providers: [RoomFacade],
})
export class RoomStateModule {}
