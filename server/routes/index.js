const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

// router.get('/', controllers.getProductList);

router.get('/join', controllers.joinParty);

module.exports = router;
