const express = require('express')
require('./config')
const Product = require('./Product')
const app = express();
app.use(express.json())

app.post('/create', async (req, res) => {

    let data = new Product(req.body);
    let result = await data.save();
    console.log(result)
    res.send(result)
});


app.get('/list', async (req, res) => {
    let data = await Product.find();
    res.send(data);
});

app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    res.send(data);
});

app.put('/update/:id', async (req, res) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,//condition
        {
            $set: req.body //updateded data
        });
        res.send(data);
});


app.listen('5000');