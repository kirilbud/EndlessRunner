class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene")
    }

    preload(){
        //all the loading stuff goes here
        this.load.image('Road', './Assets/Road.png')
        this.load.image('RoadYellow', './Assets/RoadYellow.png')
        this.load.image('tree', './Assets/Tree.png')
        this.load.image('waterCooler', './Assets/WaterCooler.png')

    }

    create(){
        

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            alighn: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth:0
        }

        //menu text
        this.add.text(game.config.width/2, game.config.height/3, 'Cubicle Collateral', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 , 'Use ← → arrows to move & space to stop', menuConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#00ff00'
        menuConfig.color = '#000000'
        this.add.text(game.config.width/2, game.config.height/3*2, 'Press ← for novice or → for Expert', menuConfig).setOrigin(0.5)

        //keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            //easy
            game.settings = {
                spaceshipSpeed:3,
                gameTimer: 60000
            }
            //this.sound.play('sfx-select')
            this.scene.start('playScene')
        }

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            //easy
            game.settings = {
                spaceshipSpeed:4,
                gameTimer: 45000
            }
            //this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
    }
}