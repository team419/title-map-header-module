const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const port = 3418;
const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist/')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  console.log('GET REQUEST');
  res.status(200).send();
});

app.listen(port, () => console.log(`Express server running on port: ${port}`));
