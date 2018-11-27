module.exports = {
  generateRandomData
}

function generateRandomData(userContext, events, done) {
  let prodId = Math.floor(Math.random() * (1000 - 900) + 900);
  userContext.myRoute = prodId;
  return done();
}