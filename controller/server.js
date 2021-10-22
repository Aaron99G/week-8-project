const express = require('express');
const path = require('path');
const Rollbar = require('rollbar');
const rollbar = new Rollbar({
    accessToken: '4d0e8767fdde4cb7bce5d199ab40abfa',
    captureUncaught: true,
    captureUnhandledRejections: true,

})

rollbar.log("Hello world!");

const app = express();

app.use('/styles', express.static(path.join(__dirname, './public/styles.css')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/home.html'));
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/phul.html'));
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/ppl.html'));
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/uplow.html'));
})

const port = process.env.PORT || 4400;

app.listen(port, () => {
    console.log(`Server is servin at ${port}`)
})