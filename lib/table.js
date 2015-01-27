function Table(io){
	this.io = io;
	this.tokens = {};
	this.name = "Jonah";
	this.setup();
}

Table.prototype.setup = function(){
	this.io.on('connection', function (socket) {
	  socket.on('dragging', function(data) {
	  	socket.broadcast.emit('dragging', data);
	  });

	  socket.on('clicked', function(data) {
	  	socket.broadcast.emit('clicked', data);
	  });
	});
}

Table.prototype.fancyName = function(start){
	return start + ": " + this.name;
}

module.exports = Table;