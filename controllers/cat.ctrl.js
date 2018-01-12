const axios = require('axios');
const { slackHook } = require('../config/default.config');
const SlackMessenger = require('slack-messenger');
const slackMsg = new SlackMessenger(slackHook);

module.exports = {
  get,
  send,
  slackMsg
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
  try {
    const message = await get(req, res, next);
    slackMsg.sendMessage(':cat2: '+message);
    res.status(200).send(null);
  } catch (err) {
    console.log('error:', err);
    res.status(error.statusCode).send(error.message);
  }
}