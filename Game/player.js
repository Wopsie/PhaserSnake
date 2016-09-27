var player = {
	SpawnPlayer: function(scene, x, y)
	{
		pickup = game.add.sprite(x,y, 'pSnake');
		this.enableBody = true;
	}
}