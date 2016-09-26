var worldWidth = 600;
var worldHeight = 600;

var game = new Phaser.Game(worldWidth, worldHeight, Phaser.AUTO, '', {preload: Preload, create: Create, update: Update, render: Render});

game.state.add('Start', Start);
game.state.add('Snake', Snake);

game.state.start('Start');
//"Awake" before start
function Preload(){}

//Start
function Create(){}

//Update
function Update(){}

//After Update
function Render(){}
