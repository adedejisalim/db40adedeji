var Food = require('../models/food'); 
 
// List of all foods 
exports.food_list = async function(req, res) {
    try{ 
        theFoods = await Food.find(); 
        res.send(theFoods); 
    }
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }  
};

// Handle a show all view 
exports.food_view_all_Page = async function(req, res) { 
    try{ 
        theFoods = await Food.find(); 
        res.render('food', { title: 'Food Search Results', results: theFoods}); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// for a specific Costume. 
exports.food_detail = async function(req, res) { 
    console.log("detail "  + req.params.id) 
    try { 
        let result = await Food.findById(req.params.id) 
        res.send(result)
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Food create on POST. 
exports.food_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Food(); 
    document.name = req.body.name; 
    document.color = req.body.color; 
    document.rating = req.body.rating; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
}; 
 
// Handle Food delete form on DELETE. 
exports.food_delete = async function(req, res) { 
    res.send('NOT IMPLEMENTED: Food delete DELETE ' + req.params.id); 
}; 
 
// Handle Food update form on PUT. 
exports.food_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food update PUT' + req.params.id); 
};