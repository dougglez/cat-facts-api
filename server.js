const express = require('express');
const axios = require('axios');
const app = express();
const { PORT } = require('./config/default.config');
const decorate = require('./middleware/decorator.middleware');

decorate(app);

app.get('/api/newfact', (req, res, next) => {
  return axios.get('https://catfact.ninja/fact')
    .then(response => {
      res.status(200).send(response.data.fact);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(418);
    })
});

app.listen(PORT, () => {
  console.log('Ready for some dope cat facts');
});
