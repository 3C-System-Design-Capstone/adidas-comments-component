const faker = require('faker');
const fs = require('fs');
const dataToSeed = fs.createWriteStream('../big_data/comments.csv');

dataToSeed.write('user,prodRating,yesRating,noRating,date,body,verified,recommend,size,width,comfort,quality,response,prodId,header\n');

console.time("generateData");

let totalCount = 1;

for (let j = 1; j <= 10000000; j++) {
  for (let i = 0; i < (3 + Math.floor((Math.random() * (15 - 3)))); i++) {
    const response = Math.random() > 0.5 ? ' ' : faker.lorem.sentence();
    const header = Math.random() > 0.5 ? ' ' : faker.lorem.sentence();
    dataToSeed.write(
      ""
      + faker.internet.userName() + ","
      + faker.random.number({ min: 1, max: 5 }) + ","
      + faker.random.number({ min: 0, max: 200 }) + ","
      + faker.random.number({ min: 0, max: 200 }) + ","
      + faker.date.past().toISOString() + ","
      + faker.lorem.sentences() + ","
      + faker.random.boolean() + ","
      + faker.random.boolean() + ","
      + faker.random.number({ min: 1, max: 4 }) + ","
      + faker.random.number({ min: 1, max: 4 }) + ","
      + faker.random.number({ min: 1, max: 4 }) + ","
      + faker.random.number({ min: 1, max: 4 }) + ","
      + response + ","
      + j + ","
      + header
      + "\n"
    )
    totalCount += 1;
    if (totalCount % 10000 === 0) {
      console.log(totalCount);
    }
  }
}

dataToSeed.end();
console.log(totalCount)
console.timeEnd("generateData");
