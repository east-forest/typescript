import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageComponent } from '../message/message.component';
import { MycheckService } from '../mycheck.service';
import { HttpClient } from '@angular/common/http';

class MyData {
  data: string = '';
}

@Component({
  selector: 'app-hello',
  styleUrl: './hello.component.css',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  title: string = '';
  message: string = ''

  constructor(private client: HttpClient) { }

  /**
   * 初期化処理
   */
  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = 'wait...';
    setTimeout(() => {
      this.getData()
    }, 5000);
  }

  getData() {
    this.client.get<MyData>('/assets/data.json').subscribe((result: MyData) => {
      this.message = 'data: ' + result.data;
    })
  }
}
