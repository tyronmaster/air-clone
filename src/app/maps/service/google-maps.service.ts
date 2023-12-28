import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigService } from '../../core/config';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  private loaded = false;
  constructor(
    private readonly httpClient: HttpClient,
    private readonly configService: ConfigService,
  ) {}

  load(): Observable<boolean> {
    return !this.loaded
      ? this.httpClient
          .jsonp(`https://maps.googleapis.com/maps/api/js?key=${this.configService.getConfig().googleMapKey}`, 'callback')
          .pipe(
            tap(() => (this.loaded = true)),
            map(() => true),
            catchError(() => of(false)),
          )
      : of(this.loaded);
  }
}
