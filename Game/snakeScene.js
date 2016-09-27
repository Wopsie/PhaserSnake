var Snake = {

	preload : function()
	{
		game.load.image('star', 'Assets/Tile.png');	
		game.load.image('pSnake', 'Assets/SnekBlock.png');

		playerMovement.preload(game);
	},

	create : function()
	{
		//spawn pickup
		pickup.SpawnPickup(game, Math.floor(Math.random() * (20))+ 1, Math.floor(Math.random() * (600))+ 1);

		//spawn player
		player.SpawnPlayer(game, 0,0);

		//set player properties
		player.collideWorldBounds = true;
	},

	update : function()
	{
		//playerMovement.update(game);

		game.physics.arcade.collide(player, pickup);
		game.physics.arcade.overlap(player, pickup, pickup.RepositionPickup, null, this);
		
		/*
		if(cursors.left.isDown)
		{
			player.body.velocity.x = -150;
		}else if(cursors.right.isDown)
		{
			player.body.velocity.x = 150;
		}else if(cursors.up.isDown)
		{
			player.body.velocity.y = 150;
		}else if(cursors.down.isDown)
		{
			player.body.velocity.y = -150;
		}
		*/
	}
};