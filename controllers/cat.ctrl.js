const axios = require('axios');
const { slackHook } = require('../config/default.config');
const SlackMessenger = require('slack-messenger');
const slackMsg = new SlackMessenger(slackHook);

console.log(slackHook);

module.exports = {
  get,
  send
};

function get (req, res, next) {
  return axios.get('https://catfact.ninja/fact')
    .then(response => {
      return response.data.fact;
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(418);
      return error;
    })
}

async function send(req, res, next) {
  console.log('req.body', req.body);
  console.log('req.query', req.query);
  console.log('\n\nreq... it gonna be big\n\n', req);
  console.log('\n\ntoken?\n\n', req.token);
  try {
    const message = await get(req, res, next);
    slackMsg.sendMessage(message);
    res.sendStatus(200)
  } catch (err) {
    console.log('error:', err);
    res.status(error.statusCode).send(error.message);
  }
}