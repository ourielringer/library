const express = require("express");
const bp = require("body-parser");
const db = require('../books/db/db.json');
const app = express();
let db_id = 2;


app.get('/' , (req, res) => {
    
    console.log("main Customers endpoint!!!!!!!!!!!!!!");
    res.send(db['customers'])
})
// app.get('/customer{id}' , (req, res) => {
//     console.log("main Customers endpoint!");
//     res.send(db['customers'][id])

// })

app.post("/customer", (req, res) => {
    console.log(req.body);
    db['customers'][db_id] = req.body;
    res.send(db['customers'])
    db_id ++;
})

app.listen(8001, ()=> {
    console.log("start Customers service");
})