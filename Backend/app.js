const mongoConnect = require('./util/database').mongoConnect;

const express = require('express');
const bodyParser = require('body-parser');

// var multer = require('multer')().single();

const app = express();

// app.use(multer);
app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
// app.use(bodyParser.json()); // application/json

const paymentData = require('./routes/saktree');

// fix error CORS
app.use((req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/payment", paymentData.routes);

mongoConnect(() => {
    app.listen(3001);
});