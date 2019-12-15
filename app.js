const express = require('express');
const app = express();

//linking routing files
const productRoutes = require('./api/routes/products');
const userRoutes = require('./api/routes/user');
const bodyParser = require('body-parser')

//using bpdy-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//the route base
app.use('/products',productRoutes);
app.use('/user',userRoutes);

module.exports=app;
