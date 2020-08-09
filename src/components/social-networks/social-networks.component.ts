import {
  trigger,
  transition,
  query,
  style,
  group,
  animate,
  stagger,
  sequence,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-networks-panel',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss'],
  animations: [
    trigger('animateIcons', [
      transition(':enter', [
        query('.social-networks-panel__icon', [
          style({ opacity: 0, transform: 'translateX(100px)' }),
          stagger('200ms', [
            animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(-15px)' })),
            animate('250ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
          ]),
        ]),
      ]),
      transition(':leave', [
        query('.social-networks-panel__icon', [
          style({ opacity: 1, transform: 'translateX(0)' }),
          stagger('200ms', [
            animate('150ms ease-in', style({ opacity: 0, transform: 'translateX(500px)' })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class SocialNetworksComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
