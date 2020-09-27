const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let filters = {}

axios.get('https://www.mocky.io/v2/5a25fade2e0000213aa90776')
.then(res=> filters = res.data)
.catch(err=>console.log(err));

app.get('/api/filters', (req, res) => {
  res.send(filters);
});

app.get('/api/playlists', (req, res) => {
  res.send(filters);
});


app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));