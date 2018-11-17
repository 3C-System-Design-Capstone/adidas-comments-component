const faker = require('faker');
const fs = require('fs');
const dataToSeed = fs.createWriteStream('./database/Products.csv');

dataToSeed.write('id, name\n');

console.time("generateData");

for (let j = 1; j <= 1000; j++) {
  dataToSeed.write(
    "" + j + "," + "Product " + j + "\n"
  )
}

dataToSeed.end();
console.timeEnd("generateData");