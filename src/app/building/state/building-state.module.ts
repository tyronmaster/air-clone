import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromBuilding from './building.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BuildingEffects } from './building.effects';
import { BuildingStorageModule } from '../storage/building-storage.module';
import { reducer } from './building.reducer';
import { BuildingFacade } from './building.facade';

@NgModule({
  imports: [
    BuildingStorageModule,
    StoreModule.forFeature(fromBuilding.BUILDING_FEATURE_KEY, reducer),
    EffectsModule.forFeature([BuildingEffects]),
  ],
  providers: [BuildingFacade],
})
export class BuildingStateModuleModule {}
