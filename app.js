const express = require('express');
const { connect } = require('./bd/connect');
const app = express();

app.get("/",(req,res) => {
    console.log("salut mongo!");
});

connect();

app.listen(3000);
console.log("attent le resultat au port 3000 ");