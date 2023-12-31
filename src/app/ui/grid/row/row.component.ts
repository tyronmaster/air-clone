import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { GridBreakpointName } from '../../theme/utils';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit{
  private lastMode: string | GridBreakpointName | null = null;

  @Input() set mode(mode: string | GridBreakpointName | null) {
    this.update(mode ?? GridBreakpointName.Xs);
  }

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.lastMode) {
      this.update(GridBreakpointName.Xs);
    }
  }

  private update(mode: string | GridBreakpointName): void {
    if (this.lastMode !== mode) {
      if (this.lastMode) {
        this.renderer.removeClass(this.elementRef.nativeElement, `row-${mode}`);
      }
      this.lastMode = mode;
      this.renderer.addClass(this.elementRef.nativeElement, `row-${mode}`);
    }
  }
}
