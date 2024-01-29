import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-report-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss'],
})
export class FireComponent  implements OnInit {
  @Output() onNextScreen = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  nextScreen(value: string) {
    this.onNextScreen.emit(value);
  }
}
