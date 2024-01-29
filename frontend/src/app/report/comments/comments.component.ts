import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-report-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent  implements OnInit {
  @Output() onNextScreen = new EventEmitter<string>();

  inputString: string = '';

  constructor() { }

  ngOnInit() {}

  nextScreen() {
    this.onNextScreen.emit(this.inputString);
  }
}
