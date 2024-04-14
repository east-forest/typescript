"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const fs = require('fs') tsではrequireを使わない
var fs = require("fs");
function total(data) {
    var t = 0;
    data.forEach(function (item) {
        t += item.count;
    });
    return t;
}
// jsと異なるところは、Data[]というように型定義をしてあげること
var content = fs.readFileSync('data.json');
var data = JSON.parse(content.toString());
console.log(total(data));
