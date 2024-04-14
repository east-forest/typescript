// const fs = require('fs') tsではrequireを使わない
import * as fs from "fs"

interface Data {
  name: string,
  count: number
}

function total(data: Data[]) {
  let t = 0;
  data.forEach((item) => {
    t += item.count;
  })
  return t;
}

// jsと異なるところは、Data[]というように型定義をしてあげること
const content = fs.readFileSync('data.json');
const data: Data[] = JSON.parse(content.toString());
console.log(total(data));
