// boolean
// string
// number
let a: string = "a"
let b = "b"
let num: number = 123
let bool = true

// any 極力使わない。JSでやっていることと同じだから
// void
function fun(a: number, b: boolean): number {
  return a + 123
}

// Array
let aa: string[] = ["a", "b"]

// Object
// 予めオブジェクトの型を決める
interface Hoge {
  a: number,
  b?: number // bに値が「ある」、「ない」可能性がある。bは必ずしも定義しなくても良い。
  c: number | null // cに値が「ある」、「null」の可能性がある。cは必ず定義しないといけない。
}
let v: Hoge = {a : 10, b: 11, c: null}
