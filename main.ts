input.onButtonPressed(Button.A, function () {
    yomoma.move(-1)
})
input.onButtonPressed(Button.B, function () {
    yomoma.move(1)
})
let yomoma: game.LedSprite = null
yomoma = game.createSprite(2, 5)
let enemy = game.createSprite(randint(0, 5), 0)
enemy.turn(Direction.Right, 90)
basic.forever(function () {
    if (enemy.isTouching(yomoma)) {
        yomoma.delete()
    }
    for (let index = 0; index < 4; index++) {
        enemy.move(1)
        basic.pause(500)
    }
    enemy.delete()
    if (enemy.isDeleted()) {
        enemy = game.createSprite(randint(1, 5), 0)
        enemy.turn(Direction.Right, 90)
    }
    if (yomoma.isDeleted()) {
        game.gameOver()
    }
})
