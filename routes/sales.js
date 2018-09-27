var express = require('express');
var router = express.Router();
const controller = require('./controllers/controller');

router.get('/', controller.getSales);

module.exports = router;