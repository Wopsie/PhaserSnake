var player, square, speed, direction, directionChange;

//because javascript hates tidy code, this "class" will be managing the 
//snake, spawning the food and be adding length to the snake when it eats.
//also restarts game when player dies
var gameScene = {

	preload : function()
	{
		console.log("gameplay");

		//load sprites
		game.load.image('player', 'assets/SnakeBlock.png');
		game.load.image('food', 'assets/Tile.png');
	},

	create : function()
	{
		//make array for the multiple sprites of the player
		player = [];
		//food object, as js demands it
		//food = {};
		//god knows
		square = 15;
		//player speed
		speed = 0;
		//direction player is moving in
		direction = 'right';
		//the direction the player inputs
		directionChange = null;

		//player movement start
		playerMovement.Start();

		//make canvas background brown
		game.stage.backgroundColor = '#703800';

		//create the snake starting at 3 squares, put them in the player array
		for (var i = 0; i < 3; i++) {
			player[i] = game.add.sprite(300 + i * square, 300, 'player');
		}
	},

	update : function()
	{
		//player movement update (check for input);
		playerMovement.Update();

		food.SpawnFood();
	}
}