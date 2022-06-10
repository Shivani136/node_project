
const express = require('express');
const mongodb = require('mongodb')
const dbConnect = require("./ mongodb")
const app = express()

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    res.send(data)
});

app.post('/',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.insert(req.body)
    // console.log(req.body)
    res.send(result)
})

//1st method

// app.put('/', async(req,res)=>{
//     let data = await dbConnect();
//     let result = await data.updateOne(
//        {name:"shivani"},
//        {$set:{age:30}}
//         )
//     console.log(req.body)
//     res.send({result:"ggggk"})
// })




//2nd method

// app.put('/', async(req,res)=>{
//     let data = await dbConnect();
//     let result = await data.updateOne(
//        {name:req.body.name},
//        {$set:req.body}
//         )
//     console.log(req.body)
//     res.send({result:"ggggk"})
// })



//3rd method

app.put("/:name", async(req,res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
       {name:req.params.name},
       {$set:req.body}
        )
    // console.log(req.body)
    res.send({result:"ggggk"})
})

app.delete("/:id",async(req,res)=>{
    console.log(req.params.id)
    let data = await dbConnect();
    let result = await data.deleteOne (
    {_id:new mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(5000);