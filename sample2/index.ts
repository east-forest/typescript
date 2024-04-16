let hello: string = 'hello';
console.log(hello);

let num = add(1, 2);
console.log(num);

// 型定義することで、関数の使い方がわかる。
function add(a: number, b: number): number {
  return a + b;
}
