const express = require('express');
const app = express();

app.get('', (req, res) => {
    console.log("data send by browser",req.query.name)
   res.send(`    <h1>welcome to home page</h1>
    <a href="/about">Go to about Page</a>
,`+ req.query.name)
});

app.get('/about', (req, res) => {
   res.send(`<h1>welcome to about page</h1>
   <input type="" placeholder="enter name" value="${req.query.name}"/>
   <button>Submit</button>
   <a href="/">Go to Home Page</a>
   `)
});

app.listen(4000);