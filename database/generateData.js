const generateData = require('./generateDataHelper');
const db = require('./index.js');

const businesses = generateData.generateBusiness();
const reviews = generateData.generateReviews();

db.connect();

db.query('USE title_module');

db.query('DROP TABLE IF IT EXISTS business');
db.query('DROP TABLE IF IT EXISTS reviews');

db.query(`CREATE TABLE business (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255),
  claimed int,
  overallRating decimal(2, 1),
  totalReviews int,
  averageCost int,
  businessTypeOne varchar(255),
  businessTypeTwo varchar(255),
  addressStreet varchar(255),
  addressCityStateZip varchar(255),
  addressBetween varchar(255),
  addressNeighborhood varchar(255),
  phoneNumber varchar(255),
  url varchar(255)
);`);

db.query(`CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255),
  text varchar(500),
  rating decimal(2, 1),
  date varchar(150),
  businessId int NOT NULL
);`);

for (let i = 0; i < businesses.length; i += 1) {
  const currentObj = businesses[i];
  const queryString = `INSERT INTO business
      (name, claimed, overallRating, totalReviews,
      averageCost, businessTypeOne, businessTypeTwo, addressStreet, addressCityStateZip,
      addressBetween, addressNeighborhood, phoneNumber, url)
    VALUES
      ("${currentObj.name}", ${currentObj.claimed},
      ${currentObj.overallRating}, ${currentObj.totalReviews},
      ${currentObj.averageCost}, "${currentObj.businessTypeOne}", "${currentObj.businessTypeTwo}",
      "${currentObj.addressStreet}", "${currentObj.addressCityStateZip}",
      "${currentObj.addressBetween}", "${currentObj.addressNeighborhood}",
      "${currentObj.phoneNumber}", "${currentObj.url}")`;
  db.query(queryString, (err) => {
    if (err) {
      console.log(err);
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
      // console.log(err);
    } else {
      // console.log(`inserted into reviews: ${i}`);
    }
  });
}

db.end();
