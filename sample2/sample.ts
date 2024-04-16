// 数値型
var foo: number = 123;

// オブジェクト
interface Point2D{
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}

var point2D: Point2D = { x: 10, y: 20 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function count(point: Point2D): number {
  return point.x + point.y
}

count(point2D);
count(point3D);
