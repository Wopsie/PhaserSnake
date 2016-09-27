var playerMovement = {

	preload : function()
	{
		Input.getInput();
	}

	update : function()
	{
		if(cursors.left.isDown)
		{
			console.log("left");
		}
	}

}