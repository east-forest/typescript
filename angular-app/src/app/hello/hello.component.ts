import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-hello',
  styleUrl: './hello.component.css',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  title: string = '';
  message: string[] = [];
  lastTarget: any;
  lastColor: string = '';
  input1: string = '';
  @ViewChild(MessageComponent)
  private msgComponent: MessageComponent = new MessageComponent();

  /**
   * 初期化処理
   */
  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = [
      'First item.',
      'Second Item',
      'Third item.'
    ];
  }

  push() {
    if (this.input1 === '') {
      alert('テキストを入力してください');
      return
    }
    this.msgComponent.push(this.input1);
    this.input1 = '';
  }

  pop() {
    this.msgComponent.pop();
  }

  doClick(event: any) {
    if (this.lastTarget) {
      this.lastTarget.style.color = this.lastColor;
      this.lastTarget.styel.backgroundColor = 'white';
    }
    this.lastTarget = event.target;
    this.lastColor = event.target.style.color;
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'red'
  }
}
