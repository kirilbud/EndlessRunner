/*
Name: Kiril Saltz
Project title: Cubicle Collateral
Hours: 3
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
    width: 840,
    height: 640,
    pixleArt: true,
    backgroundColor: '#87CEEB',
    scene: [Menu, Play]
}


let game = new Phaser.Game(config)

//ui stuff


//keyboard
let keySTOP, keyRESET, keyLEFT, keyRIGHT
