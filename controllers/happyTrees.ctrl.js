const { slackMsg } = require('./cat.ctrl');
const happyTrees = require('bob-ross-lipsum');

module.exports = {
  bobRoss
};

function bobRoss(req, res) {
  const message = happyTrees();
  console.log(message);
  slackMsg.sendMessage(':lower_left_paintbrush: '+message);
  res.status(200).send(null);
}