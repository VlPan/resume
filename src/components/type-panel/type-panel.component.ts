import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { of, from, timer, Subject } from 'rxjs';
import { delay, take, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-type-panel',
  templateUrl: './type-panel.component.html',
  styleUrls: ['./type-panel.component.scss'],
})
export class TypePanelComponent implements OnInit, OnDestroy {
  @Input() public text = '';
  @Input() public delay = 0;
  public animatedText = '';
  public destroy$: Subject<void> = new Subject();

  constructor() {}

  ngOnInit(): void {
    from(this.text.split('')).pipe(
      takeUntil(this.destroy$),
      delay(this.delay),
      map((c, index) => {
        timer(100 * index)
          .pipe(take(1))
          .subscribe(() => {
            this.animatedText += c;
          });
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
