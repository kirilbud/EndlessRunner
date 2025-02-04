/*
Name: Kiril Saltz
Project title: Cubicle Collateral
Hours: 0
creative tilt:
Sources:
Music: made in Beepbox
sfx: made in sfxr.me
Sprites: Made in Aseprite
in game music and art is made by me
*/


//game/phaser config
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}


let game = new Phaser.Game(config)

//ui stuff


//keyboard
let keySPACE, keyRESET, keyLEFT, keyRIGHT
