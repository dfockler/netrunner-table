var express = require('express')
var app = express();
var io = require('socket.io')(app.listen(8080, '192.168.2.20'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });

  socket.on('dragging', function(data) {
  	socket.broadcast.emit('dragging', data);
  });
});