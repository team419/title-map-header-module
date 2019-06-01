const generateData = require('./generateDataHelper');
const db = require('./index.js');

const businesses = generateData.generateBusiness();
const reviews = generateData.generateReviews();

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
      throw (err);
    } else {
      // console.log(`inserted into business: ${i}`);
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
      // console.log(`inserted into reviews: ${i}`);
    }
  });
}

console.log('Database Seeded!');

db.end();
