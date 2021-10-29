const express = require('express');
const bodyParser = require('body-parser');
const Paytm = require('paytm-pg-node-sdk');

const app = express();

app.get("/", function (req, res) {
    res.send("Running.")
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000.");
});