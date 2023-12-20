import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPerson from './person.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffects } from './person.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPerson.personsFeatureKey, fromPerson.reducer),
    EffectsModule.forFeature([PersonEffects])
  ]
})
export class PersonStateModule { }
