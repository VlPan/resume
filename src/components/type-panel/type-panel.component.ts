import { Component, OnInit, Input } from '@angular/core';
import { of, from, timer } from 'rxjs';
import { delay, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-type-panel',
  templateUrl: './type-panel.component.html',
  styleUrls: ['./type-panel.component.scss'],
})
export class TypePanelComponent implements OnInit {
  @Input() public text = '';
  @Input() public delay = 0;
  public animatedText = '';

  constructor() {}

  ngOnInit() {
    from(this.text.split('')).pipe(
      delay(this.delay),
      map((c, index) => {
        timer(100 * index)
          .pipe(take(1))
          .subscribe(() => {
            console.log(c);
            this.animatedText += c;
          });
      })
    ).subscribe();
  }
}
