var express = require('express');
var router = express.Router();
const controller = require('./controllers/controller');

router.get('/', controller.getHistorian);

module.exports = router;