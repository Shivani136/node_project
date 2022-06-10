console.log("hello shiv");


// const colors = require ('colors');
// console.log(colors.rainbow('OMG Rainbows!')); // rainbow


const http = require('http');
const data = require('./data')
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify(data));
res.end();
}).listen(4000,()=>{
    console.log("server is running")
});
