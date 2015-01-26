//Used for a base token object
require(["jquery", "jquery-ui", "socketio"], function($, ui, io){
	$(document).ready(function(){
		$('.dragme').draggable({
			drag: function( event, ui ) {
				socket.emit('dragging', { position: ui.position });
			}
		});

		var socket = io.connect('http://192.168.2.20:8080');
		socket.on('news', function (data) {
			console.log(data);
			socket.emit('my other event', { my: 'data' });
		});

		socket.on('dragging', function(data) {
			console.log(data);
			$('.dragme').css(data.position);
		});
	});
});
