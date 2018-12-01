const faker = require('faker');
const fs = require('fs');
const dataToSeed = fs.createWriteStream('../big_data/comments.csv');
dataToSeed.write('user,prodRating,yesRating,noRating,date,body,verified,recommend,size,width,comfort,quality,response,prodId,header\n');

function writeOneMillionTimes(writer, data, callback) {
  let i = 10000000;
  let totalCount = 1;
  write();

  function write() {
    let ok = true;

    do {
      i -= 1;
      if (i === 0) { //last time
        writer.end();
      } else {
        for (let j = 0; j < (3 + Math.floor((Math.random() * (15 - 3)))) && ok; j++) {
          const response = Math.random() > 0.5 ? ' ' : faker.lorem.sentence();
          const header = Math.random() > 0.5 ? ' ' : faker.lorem.sentence();
          ok = dataToSeed.write(
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
    } while (i > 0 && ok)

    if (i > 0) {
      writer.once('drain', write)
    }
  }
  console.log(totalCount)
}

writeOneMillionTimes(dataToSeed)
