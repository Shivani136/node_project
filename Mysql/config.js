const mysql = require('mysql');
// const URL =
//     "mongodb+srv://dbUser:foodielandPwd@frecluster.zu9n7.mongodb.net/nodeTest?retryWrites=true&w=majority";
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"productk"
});

con.connect((err)=> {
  if (err){
    console.log("err in connection");
  }else{
    console.log("Connected!");

  }
});

 module.exports = con;