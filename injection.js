shortcut.add("Ctrl+G", function() {
	console.log(yt.player.getPlayerByElement(document.getElementById('player-api')));
	yt.player.getPlayerByElement(document.getElementById('player-api')).seekTo(15, true);
});
