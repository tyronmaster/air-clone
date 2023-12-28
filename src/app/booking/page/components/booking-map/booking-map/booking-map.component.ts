import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { Observable } from 'rxjs';
import { BookingVariant } from 'src/app/booking/common';
import { BookingService } from 'src/app/booking/service';
import { MapMarkerConfig } from 'src/app/maps/common/map-marker-config';

@Component({
  selector: 'app-booking-map',
  templateUrl: './booking-map.component.html',
  styleUrls: ['./booking-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingMapComponent implements OnInit{
  constructor(private readonly bookingService: BookingService) {}

  options: google.maps.MapOptions = {
    center: {
      lat: 59.93839227045331,
      lng: 30.360033589998572,
    },
    zoom: 14,
  };

  mapMarkers$!: Observable<MapMarkerConfig[]>;
  markerOptions: google.maps.MarkerOptions = { draggable: false, icon: '/' };


  ngOnInit(): void {
    this.mapMarkers$ = this.bookingService.mapMarkers$;
  }

  onMapMarkerClicked(markerConfig: MapMarkerConfig<BookingVariant>): void {
    this.bookingService.setBookingVariant(markerConfig.data);
  }

  onMapInfoWindowClosed(): void {
    this.bookingService.clearBookingVariant();
  }
}
