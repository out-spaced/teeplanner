const services = require('../services');
const { generateJoinHtml } = require('../services');

const players = [
  {
    name: null,
  },
  {
    name: 'alex',
    status: 'Unconfirmed',
  },
  {
    name: 'bob',
    status: 'Unconfirmed',
  },
  {
    name: 'john',
    status: 'Unconfirmed',
  },
  {
    name: 'nick',
    status: 'Unconfirmed',
  },
]

function joinParty(req, res) {
  const {partyId, userId} = req.query;
  const joinUrl = generateJoinHtml(partyId, userId, players)
  res.send(joinUrl)
}

function getStatus(req, res) {
  res.send(players)
}

function postParty(req, res) {
  console.log(req.body.id);
  players[req.body.id].status = 'Confirmed'
  console.log(players)
  res.send('Complete!')
}

module.exports = {
  joinParty,
  postParty,
  getStatus,
};
