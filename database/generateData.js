const mysql = require('mysql');
const faker = require('faker');
const mysqlConfig = require('./config');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log('mySQL connection failure');
  } else {
    console.log('mySQL connection success');


    // const connection = mysql.createConnection(mysqlConfig);
    // const connection = db.connection();

    /* eslint-disable func-names */
    const generateBusiness = function () {
      const businesses = [];
      for (let i = 1; i < 101; i += 1) {
        const entry = {
          name: faker.company.companyName(),
          claimed: Math.floor(Math.random() * Math.floor(2)),
          overallRating: 2.5, // fix this
          totalReviews: 5, // fix this
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

    const generateReviews = function () {
      const reviews = [];
      for (let i = 1; i < 1000; i += 1) {
        const entry = {
          username: faker.internet.userName(),
          text: faker.lorem.paragraph(),
          rating: Math.floor(Math.random() * Math.floor(5)) + 1,
          date: faker.date.recent(),
          businessId: Math.floor(Math.random() * Math.floor(101)),
        };
        reviews.push(entry);
      }
      return reviews;
    };

    const businesses = generateBusiness();
    const reviews = generateReviews();

    // connection.connect((err) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    // console.log('connected');

    for (let i = 0; i < 1; i += 1) {
      const currentObj = businesses[i];
      console.log(currentObj);
      const queryString = `INSERT INTO business
          (name, claimed, overallRating, totalReviews,
          averageCost, businessType, address1, address2,
          address3, address4, phoneNumber, url)
        VALUES
          (${currentObj.name}), ${currentObj.claimed},
          ${currentObj.overallRating}, ${currentObj.totalReviews},
          ${currentObj.averageCost}, ${currentObj.businessType},
          ${currentObj.address1}, ${currentObj.address2},
          ${currentObj.address3}, ${currentObj.address4},
          ${currentObj.phoneNumber}, ${currentObj.url})`;
      connection.query(queryString, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('inserted into business');
          connection.end();
        }
      });
    }
  }
});


//   }
// });

// connection.connect((err0) => {
//   if (err0) {
//     throw err0;
//   } else {
//     console.log('connected');
//     connection.query(reviews, (err1) => {
//       if (err1) {
//         throw err1;
//       } else {
//         console.log('seeded reviews');
//       }
//     });
//   }
// });

// console.log(generateReviews());
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
