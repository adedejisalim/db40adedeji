var express = require('express');
const food_controlers= require('../controllers/food'); 
var router = express.Router();

/* GET home page. */
router.get('/', food_controlers.food_view_all_Page);

module.exports = router;
