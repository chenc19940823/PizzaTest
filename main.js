var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./assets/driver.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');
    
    var driver = new Driver(gameEngine);
    
	gameEngine.init(ctx);

	gameEngine.addEntity(driver);

	gameEngine.start();
});