const mongoose = require("mongoose") 
const foodSchema = mongoose.Schema({ 
 name: {
    type: String,
    required: true,
 },
 color: String, 
 rating: Number 
}) 
 
module.exports = mongoose.model("food", 
foodSchema) 