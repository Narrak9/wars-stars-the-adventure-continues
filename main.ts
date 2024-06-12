controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    screeny = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 b b b 7 . . . . 
        . 7 7 7 b b 1 1 1 1 1 b 7 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 7 . . . 
        . 7 7 7 b b 1 1 1 1 1 b 7 . . . 
        . . . . . 7 7 b b b b 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, darth_vaders_ship, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    darth_vaders_ship.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let rebel_alliance: Sprite = null
let screeny: Image = null
let darth_vaders_ship: Sprite = null
darth_vaders_ship = sprites.create(img`
    ..............ffffff....
    ..fc.........fccc6ff....
    ..fbc.....fffccc6ff.....
    ..fbbccccc66666666cc....
    ..f6bbccc66666bbb6b9c...
    ..cf6b666666666bbb999c..
    .ccf6666666666666199b6c.
    fc66cc66666666b1111b666c
    f66ccccccc6666991666666f
    ffffffc666c66666666666f.
    ....ff6666bbc6666666ff..
    ...cf6666bbfffffffff....
    ...c6666bbffc6f.........
    ...c6666cfffccf.........
    ...ffffffff6cf..........
    ........fff6c...........
    `, SpriteKind.Player)
controller.moveSprite(darth_vaders_ship, 200, 200)
darth_vaders_ship.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    screeny = scene.backgroundImage()
    screeny.replace(15, 1)
    screeny.replace(15, 1)
    screeny.replace(15, 1)
    screeny.replace(15, 1)
    screeny.replace(15, 1)
})
game.onUpdateInterval(500, function () {
    rebel_alliance = sprites.create(img`
        . . . . . . . . . . . . . . e e 
        . . . . . . . . . . . . . e e e 
        . . . . . . . . . . . . e e 2 2 
        . . . . . . . . . . . . e 2 2 4 
        . . . . . . . . . . . e f 4 4 2 
        . . . . . . . . . . e e f 2 2 2 
        . . . . . . . . e e e 4 e 2 2 2 
        d d d b f 2 f 2 4 4 e 2 e 2 2 2 
        c c c c f c f e e 2 c 2 c 2 e e 
        . . . . . . . . e e c 2 c e e e 
        . . . . . . . . . . c e f e c c 
        . . . . . . . . . . . e f c c c 
        . . . . . . . . . . . . f c c c 
        . . . . . . . . . . . . c c c c 
        . . . . . . . . . . . . . c c c 
        . . . . . . . . . . . . . . c c 
        `, SpriteKind.Enemy)
    rebel_alliance.setVelocity(-100, 0)
    rebel_alliance.setPosition(160, randint(5, 115))
    rebel_alliance.setFlag(SpriteFlag.AutoDestroy, true)
})
