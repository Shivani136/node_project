const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    place: String,
    email: String,
    age: Number,
    phone: Number,
  
});
 
module.exports = mongoose.model('product-list', productSchema);