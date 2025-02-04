class RoadPart extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        //this.sfxShot = scene.sound.add('sfx-shot',{volume: 0.3})
        this.zVal = 0
    }

    update(){
        this.setDepth(500 - zval)
    }
}