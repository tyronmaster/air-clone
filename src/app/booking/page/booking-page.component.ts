import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

import { Room } from '../../room/common';
import { RoomService } from '../../room/service';
import { RoomFacade } from '../../room/state';
import { GridBreakpointType, mediaBreakpointUp } from 'src/app/ui/theme/utils';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingPageComponent implements OnInit {
  // rooms$!: Observable<Room[]>;

  // constructor(private readonly roomFacade: RoomFacade, private readonly roomService: RoomService) {}

  // ngOnInit(): void {
  //   this.roomFacade.load();

  //   this.rooms$ = this.roomService.rooms$;
  // }

  isDesktopScreen = false;
  isMapShow = true;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(mediaBreakpointUp(GridBreakpointType.Md))
      .pipe(
        tap((breakpoints) => {
          this.isDesktopScreen = breakpoints.matches;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onToggleView() {
    this.isMapShow = !this.isMapShow;
  }
}
