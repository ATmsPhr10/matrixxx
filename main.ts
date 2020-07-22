let x = 0
let y = 0
basic.forever(function () {
    x = randint(0, 4)
    y = randint(0, 4)
    while (y < 8) {
        for (let index = 0; index <= 3; index++) {
            led.plotBrightness(x, y, 255)
            led.plotBrightness(x, y - 1, 150)
            led.plotBrightness(x, y - 2, 50)
            led.plotBrightness(x, y - 3, 0)
            y += 1
            basic.pause(200)
        }
    }
})
