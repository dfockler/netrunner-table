//Used for a base token object
require(["jquery", "jquery-ui", "socketio"], function($, ui, io){
	var socket = io.connect('http://192.168.2.20:8080');
	$('.dragme').draggable({
		drag: function( event, ui ) {
			socket.emit('dragging', { position: ui.position, elem: $(this)[0].id });
		}
	}).click(function(){
		// $(this).toggleClass("zoomed");
		socket.emit('zoomed', { elem: $(this)[0].id });
		$(this).children("img").toggleClass("zoomed");
	}).hover(function(){
		$(this).children(".card-menu").toggleClass("hidden");
	});

	$(".tap").click(function(event){
		event.stopPropagation();
		card = $(this).closest(".card");
		socket.emit('tapped', { elem: card[0].id });
		card.children("img").toggleClass("tapped");
	});

	$(".flip").click(function(event){
		event.stopPropagation();
		card = $(this).closest(".card");
		socket.emit('flipped', { elem: card[0].id });
		card.children("img").toggleClass("flipped");
	});

	socket.on('flipped', function(data) {
		$("#"+data.elem).children("img").toggleClass("flipped");
	});

	socket.on('dragging', function(data) {
		$("#"+data.elem).css(data.position);
	});

	socket.on('tapped', function(data) {
		$("#"+data.elem).children("img").toggleClass("tapped");
	});
});
