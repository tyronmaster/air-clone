import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffects } from './person.effects';
import { PERSON_FEATURE_KEY, reducer } from './person.reducer';
import { PersonFacade } from './persons.facade';
import { PersonStorageModule } from '../storage/person-storage.module';



@NgModule({
  imports: [
    PersonStorageModule,
    StoreModule.forFeature(PERSON_FEATURE_KEY, reducer),
    EffectsModule.forFeature([PersonEffects])
  ],
  providers: [PersonFacade]
})
export class PersonStateModule { }
