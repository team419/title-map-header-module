const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('../database/index');

const port = 3418;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/business', (req, res) => {

  const id = Math.floor(Math.random() * 100) + 1;
  const queryString = `SELECT * from business where id = ${id};`;

  db.query(queryString, (err, data) => {
    if (err) {
      res.status(418).send();
    } else {
      res.status(200).send(data[0]);
    }
  });
});

app.listen(port, () => console.log(`Express server running on port: ${port}`));
