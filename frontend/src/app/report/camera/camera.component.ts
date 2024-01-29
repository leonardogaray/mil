import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-report-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent  implements OnInit {
  @Output() onNextScreen = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  nextScreen(value: string) {
    this.onNextScreen.emit(value);
  }
}