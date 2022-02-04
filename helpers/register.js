const Faker = require('faker')

module.exports = {
  generateRandomData
}

function generateRandomData (userContext, events, done) {
  userContext.vars.email = `${Faker.internet.userName()}@wolox.com.ar`
  userContext.vars.password = Faker.internet.password()
  userContext.vars.firstName = Faker.name.firstName()
  userContext.vars.lastName = Faker.name.lastName()
  userContext.vars.idAlbum = Faker.random.number({min:1, max:100})
  userContext.vars.buyAlbum = Faker.random.number({min:1, max:100})
  return done()
}