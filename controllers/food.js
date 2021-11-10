var Food = require('../models/food'); 
 
// List of all foods 
exports.food_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food list'); 
}; 
 
// for a specific Costume. 
exports.food_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food detail: ' + req.params.id); 
}; 
 
// Handle Food create on POST. 
exports.food_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food create POST'); 
}; 
 
// Handle Food delete form on DELETE. 
exports.food_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food delete DELETE ' + req.params.id); 
}; 
 
// Handle Food update form on PUT. 
exports.food_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food update PUT' + req.params.id); 
};