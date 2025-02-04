class Play extends Phaser.Scene {
    constructor(){
        super("playScene")
    }

    create(){


        //this.add.text(20, 20, "Rocket Patrol Menu")

        //background
        
        //grass
        this.add.rectangle(0,game.config.height/2, game.config.width, game.config.height/2, 0x3f9b0b).setOrigin(0,0)

        

        //game assets
        
        //init road
        let roadCount = 500
        this.roads = []
        for (let i = 0; i < roadCount; i++) {
            let road
            //every other n switch from using the yellow road to the non yellow road
            if (Math.floor(i/25)%2 == 0) {
                road = new RoadPart(this,game.config.width/2,game.config.height/2,'RoadYellow',0)
            }else{
                road = new RoadPart(this,game.config.width/2,game.config.height/2,'Road',0)
            }
            

            road.zValu = i+1

            this.roads.push(road)
        }
        

        //inputs
        keySTOP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
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
        //this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig)


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
            for (let i = 0; i < this.roads.length; i++) {
                let road = this.roads[i]
                road.update()
            }
        }
        console.log(game.loop.actualFps)

    }

    checkCollision(player, object){
        //check collision between player and object
    }


}