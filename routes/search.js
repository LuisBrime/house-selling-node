var express = require('express');
var router = express.Router();
const controller = require('./controllers/controller');

router.get('/:id', controller.searchTransaction);

module.exports = router;