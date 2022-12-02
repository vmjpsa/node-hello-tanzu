var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello Tanzu!');
});

app.listen(8080, function () {
});