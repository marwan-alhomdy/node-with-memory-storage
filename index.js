// setup server
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var noteRoute = require('./router/noteRoute');

var app = express();



app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


// Expose the node_modules folder as static resources (to access socket.io.js in the browser)
app.use('/static', express.static('node_modules'));

app.use("/api/v1", noteRoute);




const server = app.listen(4000, () => {
    console.log(`Server start ....... `)
})









module.exports = app