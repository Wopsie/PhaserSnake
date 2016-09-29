var food = {
	SpawnFood : function()
	{
		game.add.sprite(Math.floor(math.random()), Math.floor(math.random));
		console.log("Spawn Food");
	},

	RelocateFood : function()
	{
		console.log("Relocate Food");
	}
}