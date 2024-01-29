import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-report-smoke',
  templateUrl: './smoke.component.html',
  styleUrls: ['./smoke.component.scss'],
})
export class SmokeComponent  implements OnInit {
  @Output() onNextScreen = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}


  nextScreen(value: string) {
    this.onNextScreen.emit(value);
  }
}
