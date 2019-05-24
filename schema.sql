DROP DATABASE IF EXISTS title_module;

CREATE DATABASE title_module;

USE title_module;

CREATE TABLE business (
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
);

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255),
  text varchar(500),
  rating decimal(2, 1),
  date varchar(150),
  businessId int NOT NULL
);
