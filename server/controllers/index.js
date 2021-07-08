const services = require('../services');
const { generateJoinHtml } = require('../services');

function joinParty(req, res) {
  const {partyId, userId} = req.query;
  const joinUrl = generateJoinHtml(partyId, userId)
  res.send(joinUrl)
}

module.exports = {
  joinParty
};
