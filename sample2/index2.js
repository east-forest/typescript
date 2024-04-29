// 型注釈
var hasVal = true;
var count = 123;
var single = 'hello';
var double = "hello";
var negative = -0.123;
// 型推論
/**
 * 基本的には、こちらを使用する
 */
var float = 3.13;
var back = "hello";
// オブジェクト
var person = {
    name: 'Jack',
    age: 32
};
console.log(person.name);
// 配列
var fruits = ['Apple', 'Banana', 'Grape'];
var fruit = fruits[0];
console.log(fruit);
// タプル型
var book = ['business', 1500, false];
// pushはできるが、参照はできない。
book.push(21);
// Enum（列挙型）
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.GRANDE;
console.log(coffee.size);
// Any型（なんでも格納できるし、どの型にも格納できる）
/**
 * JavaScriptと行っていることは同じなので、極力使用しない！
 */
var anything = true;
anything = ['Apple', 123, true];
anything = {};
// Union
var unionType = 10;
unionType = 'hello';
var unionTypes = [21, 'hello'];
// リテラル型（特定の決まった値を使った型）
/**
 * constを使うことによって、リテラル型になる
 */
var apple = 'apple';
var clothSize = 'small';
var cloth = {
    color: "white",
    size: "medium"
};
// 関数に型をつける
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
// 関数を保持する変数に型を持つ。(冗長になるため、あまり利用したくない)
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
// アロー関数の場合
var doubleNumber = function (num) { return num * 2; };
console.log(doubleNumber(2));
// コールバック関数による型
function doubleAndHundle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHundle(2, function (doubleNum) {
    return doubleNum;
});
// unknown
var unknownInput;
var anInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never型
function error(message) {
    throw new Error(message);
}
console.log(error('this is an error'));
