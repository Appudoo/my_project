var express = require('express');
var router = express.Router();

var insert = require('../controller/userController');

router.post('/insert',insert.insert)
router.get('/',insert.Selct)

module.exports = router;
