import { transition, trigger, style, animate, query, animateChild } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('container', [
      transition(':enter, :leave', [
        query('@*', animateChild(), { optional: true }),
      ]),
    ]),
    trigger('moveLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(700px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-out',
          style({ opacity: 0, transform: 'translateX(700px)' })
        ),
      ]),
    ]),
    trigger('moveRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-700px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-out',
          style({ opacity: 0, transform: 'translateX(-700px)' })
        ),
      ]),
    ]),
  ]
})
export class NavComponent implements OnInit {

  @Input() isActive = false;

  constructor() { }

  ngOnInit() {
  }

}
