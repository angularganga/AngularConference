import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector:'event-thumbnail',
  templateUrl: './event-thumbnail.component.html'
})
export class EventThumbnailComponent {
  @Input() angularEvent: any;
  @Output() eventClick: EventEmitter<string> = new EventEmitter<string>();
  someProperty = "Some property";

  handleClickMe() {
    this.eventClick.emit(this.angularEvent.name);
  }

  logFoo() {
    console.log("Log foo");
  }
}
