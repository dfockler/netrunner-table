require.config({
	paths: {
		"jquery": "https://code.jquery.com/jquery-2.1.3.min",
		"jquery-ui": "https://code.jquery.com/ui/1.11.1/jquery-ui.min",
		"socketio": "/socket.io/socket.io"
	}
});

require(["token"], function(token) {
	console.log("token loaded");
});