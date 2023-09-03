const express = require("express");
const { mongoose } = require("mongoose");
const bp = require("body-parser")
const app = express();
const db = require('./db/db.json')
const http = require('http');
const axios = require('axios');

let id = 5;

app.use(bp.json())

app.get('/' , async (req, res) => {
//     var options = {
//         host: 'localhost',
//         port: 8001,
//         path: '/',
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     };
//     http.request(options, (r, err) => {
//     console.log("ssssssssssssss", err);
//     console.log(r);
// });
    const response = await axios.get('http://localhost:8001');
    console.log(response.data);

    res.send({"books":db['books'], "customer":response.data})

})

app.post("/book", (req, res) => {
    db['books'][id] = req.body;
    res.send(db['books'])
    id ++;
})

app.listen(8000, ()=> {
    console.log("start Books service");
})