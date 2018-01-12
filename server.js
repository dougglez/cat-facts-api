const express = require('express');
const app = express();
const { PORT } = require('./config/default.config');
const decorate = require('./middleware/decorator.middleware');
const { get, send } = require('./controllers/cat.ctrl');
const { bobRoss } = require('./controllers/happyTrees.ctrl');

decorate(app);

app.get('/api/newfact', get);

app.post('/api/catfact', send);

app.post('/api/happyaccident', bobRoss);

app.listen(PORT, () => {
  console.log('Ready for some dope cat facts');
});
