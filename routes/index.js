var express = require('express');
var router = express.Router();

const restraurantController = require('../controllers/restraurantController')

/* GET home page. */
router.get('/', restraurantController.viewAll);

module.exports = router;
