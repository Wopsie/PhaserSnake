var Start = {

	preload : function()
	{

	},

	create : function()
	{
		console.log("Start state");

		//this.add.button(0, 0, 'menu', this.startGame, this);	
		game.state.start('Snake');
	},

	update : function()
	{

	},

	startGame : function () {
		game.state.start('Snake');
	}
};