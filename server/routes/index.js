const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

// router.get('/', controllers.getProductList);

router.get('/join', controllers.joinParty);

router.get('/status', controllers.getStatus)

router.post('/join', controllers.postParty)

module.exports = router;
