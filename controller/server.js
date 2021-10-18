const express = require('express');
const path = require('path');
// const Rollbar = require('rollbar');
// const rollbar = new Rollbar({
//     accessToken: '',
//     captureUncaught: true,
//     captureUnhandledRejections: true,

// })

const app = express();


const port = process.env.PORT || 4400;

app.listen(port, () => {
    console.log(`Server is servin at ${port}`)
})