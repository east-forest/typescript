import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MycheckService } from '../mycheck.service';
import { FormControl } from '@angular/forms';
import { filter, fromEvent } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent implements OnInit {
  input: FormControl = new FormControl();
  message: string = '';
  @ViewChild('btn')
  btn!: ElementRef;

  constructor(private service: MycheckService) { }

  ngOnInit(): void {
    this.input = new FormControl('');
    this.message = 'mydata list';
    const btn = this.btn.nativeElement;
    fromEvent<MouseEvent>(btn, 'click')
      .pipe(
        filter((res: MouseEvent, n: number) => {
          if (res.shiftKey) {
            return false;
          }
          return true;
        })
      )
      .subscribe((event: MouseEvent) => {
        this.doAction();
      });
  }

  updateData(ck: any) {
    this.service.updateDate(ck);
  }

  getData() {
    return this.service.data;
  }

  getList() {
    return this.service.list;
  }

  doAction() {
    let n = parseInt(this.input.value);
    if (n) {
      let p = this.service.get(n);
      this.message = JSON.stringify(p);
    } else {
      alert('数値を入力してください');
    }
  }
}
