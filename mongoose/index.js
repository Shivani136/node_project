const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerce');

const productSchema = new mongoose.Schema({
    name: String,
    place: String,
    email: String,
    age: Number,
    phone: Number,
    price: Number,
    firstname: String
});


const saveInDB = async () => {
    const Product = mongoose.model('product-list', productSchema);
    let data = new Product({
        name: "xyz",
        place: "mhow",
        email: "shiv@gmail.com",
        age: 12,
        phone: 22345645765,
        price: 123,
        firstname: "yewrye"
    });
    let result = await data.save();
    console.log(result);
}
saveInDB();

const updateInDB = async () => {
    const Product = mongoose.model('product-list', productSchema);
    let data = await Product.updateOne(
        { name: "abcd" },
        {
            $set: { name: "shivani", place: "indore" }
        })
    console.log(data);
}
updateInDB();

const deleteInDB = async () => {
    const Product = mongoose.model('product-list', productSchema);
    let data = await Product.deleteMany({ firstname: "yewrye" })
    console.log(data);
}

deleteInDB()

const findInDB = async () => {
    const Product = mongoose.model('product-list', productSchema);
    let data = await Product.find({ name: "abcd" })
    console.log(data);
}

findInDB()