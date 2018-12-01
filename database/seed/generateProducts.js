const faker = require('faker');
const fs = require('fs');
const dataToSeed = fs.createWriteStream('../big_data/products.csv');

dataToSeed.write('id,name,average_rating,percent_recommended,num_reviews_indexed_by_rating\n');

console.time("generateData");

for (let j = 1; j <= 10000000; j++) {
  dataToSeed.write(
    "" + j + ","
    + "Product " + j + ","
    + ((Math.random() * 5)) + ","
    + (20 + Math.floor((Math.random() * (100)))) + ","
    + `"{${Math.floor(((Math.random() * 5)))},${Math.floor(((Math.random() * 5)))},${Math.floor(((Math.random() * 5)))},${Math.floor(((Math.random() * 5)))},${Math.floor(((Math.random() * 5)))}}"`
    + "\n"
  )
}

dataToSeed.end();
console.timeEnd("generateData");