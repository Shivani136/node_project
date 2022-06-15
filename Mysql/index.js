const express = require('express');
const con = require('./config')
const app = express();

app.use(express.json());

app.get('/', (req, res) => {

  con.query("SELECT * FROM `product-lists`", (err, result) => {
    if (err) {
      res.send("error")
    } else {
      res.send(result)
    }
  })
})


app.post("/", (req, res) => {
  const data = req.body;
  //  const data = {id: 8, name: "mahi" };
  con.query('INsert INTO `product-lists` SET ?', data, (error, result, fields) => {
    if (error) {
      res.send(error)
    } else {
      res.send(result)
    }
  })
});


app.put('/:id', (req, res) => {
  const data = [req.body.name, req.params.id]
  console.log(req.body, "SSSSSSSSSSS")
  // UPDATE `product-lists` SET `name`='[shivani]' WHERE id=2
  con.query('UPDATE `product-lists` SET name = ? WHERE id = ?', data, (error, result, fields) => {
    if (error) {
      res.send(error)
    } else {
      res.send(result)
    }
  })
})

// res.send("data updated")


app.delete('/:id', (req, res) => {
  con.query('DELETE FROM `product-lists` WHERE id =' + req.params.id, (error, result) => {
    if (error) throw error;
    res.send(result)
  });

})


app.listen(5000);



