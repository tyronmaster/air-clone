import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootInitialState, rootReducers } from './reducer/root.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RootRouterStateSerializer } from './serializer/root-router-state-serializer.service';



@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot(
        rootReducers, {
          initialState: rootInitialState,
          metaReducers: []}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: RootRouterStateSerializer
    })
  ]
})
export class RootStoreModule { }
