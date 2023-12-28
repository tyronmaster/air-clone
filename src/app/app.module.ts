import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './ui/theme/layout/layout.module';
import { RootStoreModule } from './core/store/root/root-store.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppLocaleModule } from './app-locale/app-locale.module';
import { GoogleMapsSharedModule } from './maps/shared/google-maps-shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RootStoreModule,
    AppLocaleModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
