//Used for a base token object
require(["jquery", "jquery-ui", "socketio"], function($, ui, io){
	var socket = io.connect('http://192.168.2.20:8080');
	$('.dragme').draggable({
		drag: function( event, ui ) {
			socket.emit('dragging', { position: ui.position, elem: $(this)[0].id });
		}
	}).click(function(){
		$(this).toggleClass("zoomed");
		socket.emit('clicked', { elem: $(this)[0].id });
	});

	socket.on('dragging', function(data) {
		console.log(data);
		$("#"+data.elem).css(data.position);
	});

	socket.on('clicked', function(data) {
		$("#"+data.elem).toggleClass("zoomed");
	});
});
