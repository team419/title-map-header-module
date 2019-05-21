const mysql = require('mysql');
const mysqlConfig = require('./config');
const data = require('./generateData');

const db = mysql.createConnection(mysqlConfig);
const businesses = data.generateBusiness();
const reviews = data.generateReviews();

for (let i = 0; i < businesses.length; i += 1) {
  const currentObj = businesses[i];
  const queryString = `INSERT INTO business
      (name, claimed, overallRating, totalReviews,
      averageCost, businessType, addressStreet, addressCityStateZip,
      addressBetween, addressNeighborhood, phoneNumber, url)
    VALUES
      ("${currentObj.name}", ${currentObj.claimed},
      ${currentObj.overallRating}, ${currentObj.totalReviews},
      ${currentObj.averageCost}, "${currentObj.businessType}",
      "${currentObj.addressStreet}", "${currentObj.addressCityStateZip}",
      "${currentObj.addressBetween}", "${currentObj.addressNeighborhood}",
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

// db.end();

module.exports = db;
