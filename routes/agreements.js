var express = require('express');
var router = express.Router();
const controller = require('./controllers/controller');

router.get('/', controller.getAgreements);

module.exports = router;