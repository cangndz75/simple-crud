const express = require('express');
const mongoose = require('mongoose');
const Product= require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

app.use(express.json());

app.use("/api/products",productRoute);

app.get('/',(req,res) => {
    res.send("Hello world");
})


mongoose.connect("mongodb+srv://cang:159753sk@cluster0.zemsfaa.mongodb.net/deneeme?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to database!")
    app.listen(3000, () => {
        console.log("Server 3000'de çalışıyor.",)
    })
})
.catch(() => {
    console.log("Connection failed!");
})