var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/saturne', function (req, res) {
  res.send('Hello saturne!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

