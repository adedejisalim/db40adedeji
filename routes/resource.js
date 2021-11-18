var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var food_controller = require('../controllers/food'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// FOOD ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/foods', food_controller.food_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/foods/:id', food_controller.food_delete); 
 
// PUT request to update Costume. 
router.put('/foods/:id', 
food_controller.food_update_put); 
 
// GET request for one Costume. 
router.get('/foods/:id', food_controller.food_detail); 
 
// GET request for list of all Costume items. 
router.get('/foods', food_controller.food_list);

/* GET detail food page */ 
router.get('/detail', food_controller.food_view_one_Page); 

/* GET create food page */ 
router.get('/create', food_controller.food_create_Page);

/* GET create food page */ 
router.get('/update', food_controller.food_update_Page);

/* GET create food page */ 
router.get('/delete', food_controller.food_delete_Page);
 
module.exports = router;