const fs = require('fs')

function total(data) {
  let t = 0;
  data.forEach((item) => {
    t += item.count;
  })
  return t;
}

const data = JSON.parse(fs.reqdFileSync('data.json'))
console.log(total(data));
