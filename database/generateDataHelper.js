/* eslint-disable func-names */
const faker = require('faker');

// generate fake data for 100 unique businesses
module.exports.generateBusiness = function (amount = 100) {
  const businesses = [];
  const suffixes = ['St', 'Dr', 'Rd', 'Blvd', 'Ln', 'Ct'];
  const randomSuffix = () => suffixes[Math.floor(Math.random() * 6)];

  for (let i = 0; i < amount; i += 1) {
    const entry = {
      name: `${faker.commerce.product()} ${faker.commerce.productMaterial()} ${faker.company.companySuffix()}`,
      claimed: Math.floor(Math.random() * 2),
      // overallRating needs future refactor to generate dynamic rating
      overallRating: Math.floor(Math.random() * 5) + 1,
      // totalReviews needs future refactor to generate dynamic count
      totalReviews: Math.floor(Math.random() * 225) + 10,
      averageCost: Math.floor(Math.random() * 4) + 1,
      businessTypeOne: faker.company.catchPhraseAdjective(),
      businessTypeTwo: faker.name.jobArea(),
      addressStreet: faker.address.streetAddress(),
      addressCityStateZip: `${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
      addressBetween: `b/t ${faker.address.streetName()} ${randomSuffix()} & ${faker.address.streetName()} ${randomSuffix()}`,
      addressNeighborhood: faker.address.city(),
      phoneNumber: faker.phone.phoneNumber(),
      url: `${faker.lorem.word()}${faker.internet.domainWord()}.${faker.internet.domainSuffix()}`,
    };
    businesses.push(entry);
  }
  return businesses;
};

// generate fake date for 7000 total reviews of the corresponding 100 businesses generated above
module.exports.generateReviews = function (amount = 3000) {
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
