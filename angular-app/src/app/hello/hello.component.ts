import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  styleUrl: './hello.component.css',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  title: string = '';
  message: string = '';
  nowClass: any;

  /**
   * 初期化処理
   */
  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = 'false, false, false';
    this.nowClass = {
      'thin': false,
      'large': false,
      'frame': false,
    }
  }

  check(c1: any, c2: any, c3: any) {
    this.nowClass.thin = c1;
    this.nowClass.large = c2;
    this.nowClass.frame = c3;
    this.message = c1 + ',' + c2 + ',' + c3;
  }
}
