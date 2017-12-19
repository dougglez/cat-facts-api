const axios = require('axios');

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
  try {
    const message = await get(req, res, next);
    slackMsg(message, res)
  } catch (err) {
    console.log('error:', err);
  }
}

function slackMsg(message, res) {
  console.log('message:', message);
    return axios.post('http://localhost:8083/api/sendmessage', {message})
      .then(response => res.sendStatus(200))
      .catch(err => {
        console.log('error: ', err);
        res.sendStatus(418);
      })

}