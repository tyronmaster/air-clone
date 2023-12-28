import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapServiceModule } from '../service';
import { GoogleMapsComponent } from './google-maps.component';

@NgModule({
  declarations: [GoogleMapsComponent],
  imports: [CommonModule, GoogleMapsModule, GoogleMapServiceModule],
  exports: [GoogleMapsComponent],
})
export class GoogleMapsSharedModule {}
