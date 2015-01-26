var Table = require('./lib/table.js');
var express = require('express')
var app = express();
var io = require('socket.io')(app.listen(8080, '192.168.2.20'));

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

var mytable = new Table(io);
console.log(mytable.fancyName("The name is"))