import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';

class MyData {
  data: string = '';
  list: Person[] = [];
}

class Person {
  name: string = '';
  mail: string = '';
  tel: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class MycheckService {
  private mydata = new MyData();

  constructor(private client: HttpClient) {
    this.updateDate(true);
    this.mydata = new MyData();
  }

  updateDate(f: boolean) {
    this.client
      .get<Response>('assets/data.json')
      .pipe(
        map((res: Response) => {
          return f ? res : null;
        })
      )
      .subscribe((result: any) => {
        if (result) {
          this.mydata = result;
        } else {
          this.mydata = new MyData();
        }
      });
  }

  get(n: number) {
    return this.mydata.list[n];
  }

  get size() {
    return this.list.length;
  }

  get list() {
    // return this.mydata.list.map((v) => {
    //   v.name = '****';
    //   return v;
    // });
    return this.mydata.list.filter((v, k) => {
      return k % 2 == 0 ? true : false;
    })
  }

  get data() {
    return this.mydata.data;
  }
}
