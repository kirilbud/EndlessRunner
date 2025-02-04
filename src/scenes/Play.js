class Play extends Phaser.Scene {
    constructor(){
        super("playScene")
    }

    create(){


        this.add.text(20, 20, "Rocket Patrol Menu")

        //background
        

        

        //game assets
        
        //init road
        

        

        //inputs
        keyFIRE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        //score stuff
        this.p1Score = 0
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth:100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig)

        this.timeRight = this.add.text(game.config.width - borderUISize*4.5, borderUISize + borderPadding*2, this.p1Score, scoreConfig)

        this.gameOver = false
        
        
        
    }

    update(){

        let deltaTime = Phaser.Core.TimeStep.delta


        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyRESET)) {
            this.scene.restart()
        }

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene")
        }



        if (!this.gameOver) {
            //while game is still running
        }

    }

    checkCollision(player, object){
        //check collision between player and object
    }


}