import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MapMarkerConfig } from '../common/map-marker-config';
import { Observable } from 'rxjs';
import { GoogleMapsService } from '../service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapsComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  @Input() options!: google.maps.MapOptions;
  @Input() markerOptions!: google.maps.MarkerOptions;
  @Input() markers: MapMarkerConfig[] = [];

  @Output() mapMarkerClicked = new EventEmitter<MapMarkerConfig>();
  @Output() mapInfoWindowClosed = new EventEmitter<void>();

  apiLoaded$ = new Observable<boolean>();
  private markerClicked: MapMarkerConfig | null = null;

  constructor(private googleMapsService: GoogleMapsService) {}

  ngOnInit() {
    this.apiLoaded$ = this.googleMapsService.load();
  }

  onMarkerClick(config: MapMarkerConfig, marker: MapMarker) {
    this.markerClicked = config;
    this.mapMarkerClicked.emit(config);
    this.infoWindow?.open(marker);
  }

  onMapClick() {
    if (this.markerClicked) {
      this.closeInfoWindow();
    }
  }

  onInfoWindowClosed() {
    this.closeInfoWindow();
  }

  private closeInfoWindow() {
    this.markerClicked = null;
    this.infoWindow?.close();
    this.mapInfoWindowClosed.emit();
  }
}
