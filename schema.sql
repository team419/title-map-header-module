DROP DATABASE IF EXISTS title_module;

CREATE DATABASE title_module;

USE title_module;

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

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255),
  text varchar(255),
  rating decimal(2, 1),
  date date,
  businessId int NOT NULL,
  FOREIGN KEY (businessId) REFERENCES business(id)
);

