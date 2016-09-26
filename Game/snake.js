var Snake = {
	preload : function()
	{
		game.load.image('star', 'Assets/Tile.png');	
	},

	create : function()
	{
		console.log("snake state");

		pickup.SpawnPickup(game, Math.floor(Math.random() * (20))+ 1, Math.floor(Math.random() * (600))+ 1);

		for(var i; i < 20; i++)
		{
			pickup.SpawnPickup(game, Math.floor(Math.random() * (20))+ 1, Math.floor(Math.random() * (600))+ 1);
		}
	},

	update : function()
	{

	}
};