const express = require('express');
const path = require('path');
const Rollbar = require('rollbar');
const rollbar = new Rollbar({
    accessToken: '4d0e8767fdde4cb7bce5d199ab40abfa',
    captureUncaught: true,
    captureUnhandledRejections: true,

})

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../home.html'));
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../phul.html'));
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../ppl.html'));
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../uplow.html'));
})

const port = process.env.PORT || 4400;

app.listen(port, () => {
    console.log(`Server is servin at ${port}`)
})