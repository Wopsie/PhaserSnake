var playerMovement = {

	preload : function(scene)
	{
		Input.getInput();
	},

	update : function(scene)
	{
		if(cursors.left.isDown)
		{
			console.log("left");
		}
	}

};
