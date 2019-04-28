import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector:'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
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

  getStartTimeClass() {
    if (this.angularEvent && this.angularEvent.time === '8:00 am') {
      return ['green', 'bold'] }
    else if (this.angularEvent && this.angularEvent.time === '10:00 am') {
      return ['yellow', 'bold'] }
    else {
      return [];
    }

  }
}
