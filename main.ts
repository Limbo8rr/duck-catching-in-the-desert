scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeLifeBy(-3)
    tiles.setTileAt(location, assets.tile`myTile`)
    game.splash("can't you see i'm a cactus you'll lose health if you dare try to hurt me!!")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.splash("these brothers brang me here but to cach wild ducks so please don't run into them.")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 f 5 5 f 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . 5 f f 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . f 3 8 5 5 5 5 8 3 f . . . 
    . . f 3 8 5 5 5 5 5 5 8 3 f . . 
    . . . f 3 5 5 5 5 5 5 3 f . . . 
    . . . . 3 8 5 5 5 5 8 3 . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 35, 35)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
scene.cameraFollowSprite(mySprite)
info.setLife(20)
scene.setBackgroundColor(13)
