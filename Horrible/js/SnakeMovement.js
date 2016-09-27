var playerMovement = {
	//gets called in preload method of game.js
	Start : function()
	{
		Input.GetInput();
		console.log("player movement preload");
	},

	//gets called in update method of game.js
	Update : function()
	{
		console.log("player movement update");
		if(cursors.left.isDown)
		{
			console.log("left pressed");
		}
	}
};