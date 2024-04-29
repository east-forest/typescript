// 型注釈
let hasVal: boolean = true;
let count: number = 123;
let single: string = 'hello';
let double: string = "hello";
let negative: number = -0.123;

// 型推論
/**
 * 基本的には、こちらを使用する
 */
let float = 3.13;
let back = `hello`;

// オブジェクト
const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 32
}
console.log(person.name);

// 配列
const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0];
console.log(fruit);

// タプル型
const book: [string, number, boolean] = ['business', 1500, false];
// pushはできるが、参照はできない。
book.push(21);

// Enum（列挙型）
enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.GRANDE;
console.log(coffee.size);


// Any型（なんでも格納できるし、どの型にも格納できる）
/**
 * JavaScriptと行っていることは同じなので、極力使用しない！
 */
let anything: any = true;
anything = ['Apple', 123, true];
anything = {}

// Union
let unionType: number | string = 10;
unionType = 'hello';
let unionTypes: (number | string)[] = [21, 'hello'];

// リテラル型（特定の決まった値を使った型）
/**
 * constを使うことによって、リテラル型になる
 */
const apple = 'apple';
const clothSize: 'small' | 'medium' | 'large' = 'small';

const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: "white",
  size: "medium"
}

// typeエイリアス
type clothSize = 'small' | 'medium' | 'large';

// 関数に型をつける
function add(num1: number, num2: number) : number {
  return num1 + num2
}
console.log(add(1, 2));


// 関数を保持する変数に型を持つ。(冗長になるため、あまり利用したくない)
const anotherAdd: (n1: number, n2: number) => number = function(num1, num2) {
  return num1 + num2
}
// アロー関数の場合
const doubleNumber: (num: number)=> number = num => num * 2;
console.log(doubleNumber(2));

// コールバック関数による型
function doubleAndHundle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHundle(2, doubleNum => {
  return doubleNum
});

// unknown
let unknownInput: unknown;
let anInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;

if (typeof unknownInput === 'string') {
  text = unknownInput;
}

// never型(決して何も返さない)
function error(message: string): never {
  throw new Error(message);
}
console.log(error('this is an error'));
