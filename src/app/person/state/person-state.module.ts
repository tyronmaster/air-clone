import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromPerson from './person.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffects } from './person.effects';
import { reducer } from './person.reducer';
import { PersonFacade } from './persons.facade';
import { PersonStorageModule } from '../storage/person-storage.module';



@NgModule({
  imports: [
    PersonStorageModule,
    StoreModule.forFeature(fromPerson.PERSON_FEATURE_KEY, reducer),
    EffectsModule.forFeature([PersonEffects])
  ],
  providers: [PersonFacade]
})
export class PersonStateModule { }
