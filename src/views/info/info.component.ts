import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [
    trigger('moveDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate(
          '1000ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '1000ms ease-out',
          style({ opacity: 0, transform: 'translateY(-100px)' })
        ),
      ]),
    ]),
    trigger('moveLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate(
          '1000ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '1000ms ease-out',
          style({ opacity: 0, transform: 'translateY(100px)' })
        ),
      ]),
    ]),
    trigger('moveRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate(
          '1000ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '1000ms ease-out',
          style({ opacity: 0, transform: 'translateX(-100px)' })
        ),
      ]),
    ]),
  ],
})
export class InfoComponent implements OnInit {
  public isNavShown = false;
  constructor() {}

  toggleNavigation(): void {
    this.isNavShown = !this.isNavShown;
  }

  ngOnInit() {}
}
