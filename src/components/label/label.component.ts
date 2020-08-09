import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() text = '';
  @Input() color = '';
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  private readonly colorMapper = {
    red: 'label--red',
    blue: 'label--blue',
    yellow: 'label--yellow',
    orange: 'label--orange',
    blue2: 'label--blue2',
    violet: 'label--violet',
    green: 'label--green',
  };

  constructor() { }

  ngOnInit() {
  }

  public get labelClass(): string {
    return 'label ' + this.colorMapper[this.color];
  }

}
