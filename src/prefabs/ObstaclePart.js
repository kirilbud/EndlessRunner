//heavily inspired by this
//https://math.stackexchange.com/questions/2337183/one-point-perspective-formula

class ObstaclePart extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        
        this.zValu = 0
        this.xValu = x
        

        this.setOrigin(.5,1)
    }

    update(){
        this.setDepth(500 - this.zValu)
        this.scale = 1/this.zValu*50 *this.scaleVal
        this.y = (1/this.zValu)*5000 + (game.config.height/2) -10
        this.x = this.xValu*(1/this.zValu)*1 + game.config.width/2 
        //console.log(this.y)

        this.zValu -= .2 
        if (this.zValu <= 0) {
            this.zValu = 500
        }
    }
}