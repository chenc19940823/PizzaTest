class Driver{

	constructor(game) {
        Object.assign(this, { game });
        
        this.spritesheet = ASSET_MANAGER.getAsset("./assets/driver.png");

        this.animation = new Animator(this.spritesheet, 0.5, 1, 18, 17, 12, 0.1, 2, false, true)
        
    };

    update() {

    };

    draw(ctx){

        this.animation.drawFrame(this.game.clockTick,ctx, 440, 550, 3);
    };
};