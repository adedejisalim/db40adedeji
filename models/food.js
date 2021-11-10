const mongoose = require("mongoose") 
const foodSchema = mongoose.Schema({ 
 name: String, 
 color: String, 
 rating: Number 
}) 
 
module.exports = mongoose.model("food", 
foodSchema) 