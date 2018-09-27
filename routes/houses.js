var express = require('express');
var router = express.Router();
const controller = require('./controllers/controller');

router.get('/', controller.getHouses);

module.exports = router;