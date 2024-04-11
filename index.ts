// string
const firstName = '東森';

// number
const age = 24;

// boolean
let isHuman = true;
isHuman = false;

// Date
let birthday = new Date('1997-10-13');

// union(後で確認する)
let rank: 'S' | 'A' | 'B' | 'C' = 'S';

// void
let funlog = () => {
  console.log('ログを出力しました');
}

let funcSum = (a: number, b: number) => {
  return a + b;
}

funcSum(1, 2);

// Object
let object = {
  name: "東森",
  age: 24,
  isHuman: false,
  birthday: new Date("1997-01-01")
}

// jsだと、数値にしてもエラーにならない。
object.name = "123"

// 予め型を定義してしまう。
type User = {
  name: string;
  age: number;
  isHuman: boolean;
  birthDay: Date;
}

let User = {
  name: "aaa",
  age: 12,
  isHuman: true,
  birthday: new Date("1997-01-01")
}

// 配列
let array: number[] = [1, 2, 3];

//タプル
let tuple: [string, number, boolean] = ["あs", 23, true];
