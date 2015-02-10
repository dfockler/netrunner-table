function Table(io){
	this.io = io;
	this.tokens = {};
	this.name = "Jonah";
	this.setup();
}

Table.prototype.setup = function(){
	this.io.on('connection', function (socket) {
	  socket.on('dragging', function(data) {
	  	console.log(data);
	  	socket.broadcast.emit('dragging', data);
	  });

	  socket.on('tapped', function(data) {
	  	console.log(data);
	  	socket.broadcast.emit('tapped', data);
	  });

	  socket.on('flipped', function(data) {
	  	console.log(data);
	  	socket.broadcast.emit('flipped', data);
	  });
	});
}

Table.prototype.fancyName = function(start){
	return start + ": " + this.name;
}

module.exports = Table;