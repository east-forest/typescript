import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {
  @Input() content: string[] = [];
  @Output() action = new EventEmitter<MouseEvent>;

  constructor() { }
  ngOnInit(): void {
  }

  doAction(event: any) {
    this.action.emit(event);
  }

  push(item: string) {
    this.content.push(item)
  }

  pop() {
    this.content.pop();
  }

}
