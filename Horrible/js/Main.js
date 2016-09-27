var game = new Phaser.Game(600, 600, Phaser.AUTO, '');


game.state.add('start', start);
game.state.add('gameScene', gameScene);

game.state.start('start');