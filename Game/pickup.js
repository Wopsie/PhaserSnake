var pickup = {
	SpawnPickup: function(scene, x, y)
	{
		this.enableBody = true;
		pickup = game.add.sprite(x,y,'star');
		console.log("Pickup loaded");
	},

	RepositionPickup: function(scene, x, y)
	{
		//reposition pickup when player has collided with it
		pickup.x = x;
		pickup.y = y;
		//add one block to snake length
	}
}