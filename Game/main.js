var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: Preload, create: Create, update: Update, render: Render});

//"Awake" before start
function Preload()
{
	console.log("===Hello Phaser===");
}

//Start
function Create()
{

}

//Update
function Update() 
{
	
}

//After Update
function Render()
{
	
}
