var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOLAB_URL || 'mongod://localhost/oscar_dev');

app.use(function(req, res) {
  res.status(404).send('could not find file');
});

app.listen(port, function() {
  console.log('Server up on port number ' + port + '.');
});
