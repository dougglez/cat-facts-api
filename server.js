const express = require('express');
const axios = require('axios');
const app = express();
const { PORT } = require('./config/default.config');
const decorate = require('./middleware/decorator.middleware');
const { get, send } = require('./controllers/cat.ctrl');
decorate(app);

app.get('/api/newfact', get);

app.post('/api/sendcatslack', send);

app.listen(PORT, () => {
  console.log('Ready for some dope cat facts');
});
