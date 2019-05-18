
const faker = require('faker');

const generateBusiness = function () {
  const businesses = [];
  for (let i = 0; i < 100; i += 1) {
    const entry = {
      id: i,
      name: faker.company.companyName(),
      claimed: Math.floor(Math.random() * Math.floor(2)),
      overallRating: 0, // fix this
      totalReviews: 0, // fix this
      averageCost: Math.floor(Math.random() * Math.floor(4)) + 1,
      businessType: `${faker.company.catchPhraseAdjective()}, ${faker.name.jobArea()}`,
      address1: `${faker.address.streetAddress()}`,
      address2: `${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
      address3: `b/t ${faker.address.streetName()} ${faker.address.streetSuffix()} & ${faker.address.streetName()} ${faker.address.streetSuffix()}`,
      address4: `${faker.address.city()}`,
      phoneNumber: faker.phone.phoneNumber(),
      url: `${faker.lorem.word()}${faker.internet.domainWord()}${faker.internet.domainSuffix()}`,
    };
    businesses.push(entry);
  }
  return businesses;
};

// console.log(generateBusiness());

/*

CREATE TABLE business (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  claimed int,
  overallRating decimal(2, 1),
  totalReviews int,
  averageCost int,
  businessType varchar(255),
  address varchar (255),
  phoneNumber varchar(255),
  url varchar(255)
);

*/


/*

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255),
  text varchar(255),
  rating decimal(2, 1),
  date date,
  businessId int NOT NULL,
  FOREIGN KEY (businessId) REFERENCES business(id)
);

*/
