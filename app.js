var express = require('express');

var app = express();

app.get('/', function (req, res, next) {
  res.send('hola? o.O');
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
