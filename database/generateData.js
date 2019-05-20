/* eslint-disable func-names */
const faker = require('faker');
const db = require('./index');

// generate fake data for 100 unique businesses
const generateBusiness = function () {
  const businesses = [];
  for (let i = 0; i < 100; i += 1) {
    const entry = {
      name: faker.company.companyName(),
      claimed: Math.floor(Math.random() * Math.floor(2)),
      // overallRating needs future refactor to generate dynamic rating
      overallRating: Math.floor(Math.random() * Math.floor(5)) + 1,
      // totalReviews needs future refactor to generate dynamic count
      totalReviews: Math.floor(Math.random() * Math.floor(60)) + 10,
      averageCost: Math.floor(Math.random() * Math.floor(4)) + 1,
      businessType: `${faker.company.catchPhraseAdjective()}, ${faker.name.jobArea()}`,
      address1: `${faker.address.streetAddress()}`,
      address2: `${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
      address3: `b/t ${faker.address.streetName()} ${faker.address.streetSuffix()} & ${faker.address.streetName()} ${faker.address.streetSuffix()}`,
      address4: `${faker.address.city()}`,
      phoneNumber: faker.phone.phoneNumber(),
      url: `${faker.lorem.word()}${faker.internet.domainWord()}.${faker.internet.domainSuffix()}`,
    };
    businesses.push(entry);
  }
  return businesses;
};

// generate fake date for 7000 total reviews of the corresponding 100 businesses generated above
const generateReviews = function () {
  const reviews = [];
  for (let i = 1; i < 7000; i += 1) {
    const entry = {
      username: faker.internet.userName(),
      text: faker.lorem.sentences(),
      rating: Math.floor(Math.random() * Math.floor(5)) + 1,
      date: new Date(),
      businessId: Math.floor(Math.random() * Math.floor(100)) + 1,
    };
    reviews.push(entry);
  }
  return reviews;
};

const businesses = generateBusiness();
const reviews = generateReviews();

for (let i = 0; i < businesses.length; i += 1) {
  const currentObj = businesses[i];
  const queryString = `INSERT INTO business
      (name, claimed, overallRating, totalReviews,
      averageCost, businessType, address1, address2,
      address3, address4, phoneNumber, url)
    VALUES
      ("${currentObj.name}", ${currentObj.claimed},
      ${currentObj.overallRating}, ${currentObj.totalReviews},
      ${currentObj.averageCost}, "${currentObj.businessType}",
      "${currentObj.address1}", "${currentObj.address2}",
      "${currentObj.address3}", "${currentObj.address4}",
      "${currentObj.phoneNumber}", "${currentObj.url}")`;
  db.query(queryString, (err) => {
    if (err) {
      throw (err);
    } else {
      console.log(`inserted into business: ${i}`);
    }
  });
}

for (let i = 0; i < reviews.length; i += 1) {
  const currentObj = reviews[i];
  const queryString = `INSERT INTO reviews
      (username, text, rating, date, businessId)
    VALUES
      ("${currentObj.username}", "${currentObj.text}",
      ${currentObj.rating}, "${currentObj.date.toString()}",
      ${currentObj.businessId})`;
  db.query(queryString, (err) => {
    if (err) {
      throw (err);
    } else {
      console.log(`inserted into reviews: ${i}`);
    }
  });
}

db.end();
