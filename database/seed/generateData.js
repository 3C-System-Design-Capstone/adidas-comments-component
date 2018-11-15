const faker = require('faker');
const fs = require('fs');
const dataToSeed = fs.createWriteStream('./database/dataToSeed.csv');

dataToSeed.write('user, prodRating, yesRating, noRating, date, body, verified, recommend, size, width, comfort, quality, response, prodId, header\n');

console.time("generateData");

for (let j = 1; j <= 1000; j++) {
  for (let i = 0; i < 10000; i++) {
    const response = Math.random() > 0.5 ? null : faker.lorem.sentence();
    const header = Math.random() > 0.5 ? null : faker.lorem.sentence();
    dataToSeed.write(
      "" + faker.internet.userName() + ", "
      + faker.random.number({ min: 1, max: 5 }) + ", "
      + faker.random.number({ min: 0, max: 200 }) + ", "
      + faker.random.number({ min: 0, max: 200 }) + ", "
      + faker.date.past() + ", "
      + faker.lorem.sentences() + ", "
      + faker.random.boolean() + ", "
      + faker.random.boolean() + ", "
      + faker.random.number({ min: 1, max: 4 }) + ", "
      + faker.random.number({ min: 1, max: 4 }) + ", "
      + faker.random.number({ min: 1, max: 4 }) + ", "
      + faker.random.number({ min: 1, max: 4 }) + ", "
      + response + ", "
      + j + ", "
      + header
      + "\n"
    )
  }
}

dataToSeed.end();
console.timeEnd("generateData");
