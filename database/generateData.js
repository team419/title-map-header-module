/* eslint-disable func-names */
const faker = require('faker');

// generate fake data for 100 unique businesses
module.exports.generateBusiness = function (amount = 100) {
  const businesses = [];
  for (let i = 0; i < amount; i += 1) {
    const entry = {
      name: faker.company.companyName(),
      claimed: Math.floor(Math.random() * 2),
      // overallRating needs future refactor to generate dynamic rating
      overallRating: Math.floor(Math.random() * 5) + 1,
      // totalReviews needs future refactor to generate dynamic count
      totalReviews: Math.floor(Math.random() * 60) + 10,
      averageCost: Math.floor(Math.random() * 4) + 1,
      businessType: `${faker.company.catchPhraseAdjective()}, ${faker.name.jobArea()}`,
      addressStreet: faker.address.streetAddress(),
      addressCityStateZip: `${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
      addressBetween: `b/t ${faker.address.streetName()} ${faker.address.streetSuffix()} & ${faker.address.streetName()} ${faker.address.streetSuffix()}`,
      addressNeighborhood: faker.address.city(),
      phoneNumber: faker.phone.phoneNumber(),
      url: `${faker.lorem.word()}${faker.internet.domainWord()}.${faker.internet.domainSuffix()}`,
    };
    businesses.push(entry);
  }
  return businesses;
};

// generate fake date for 7000 total reviews of the corresponding 100 businesses generated above
module.exports.generateReviews = function (amount = 7000) {
  const reviews = [];
  for (let i = 1; i < amount; i += 1) {
    const entry = {
      username: faker.internet.userName(),
      text: faker.lorem.sentences(),
      rating: Math.floor(Math.random() * 5) + 1,
      // future refactor needed to generate dynamic date
      date: new Date(),
      businessId: Math.floor(Math.random() * 100) + 1,
    };
    reviews.push(entry);
  }
  return reviews;
};

// need future refactor on lines 11, 13, and 37 for generating dynamic data
