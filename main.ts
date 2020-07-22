let x = 0
let y = 0
let r1 = 0
let r2 = 0
basic.forever(function () {
    x = randint(0, 4)
    y = randint(0, 4)
    while (y < 8) {
        if (x == 0) {
            r1 = 2
            led.plotBrightness(x, y, 255)
            led.plotBrightness(x + r1, y, 255)
            led.plotBrightness(x, y - 1, 150)
            led.plotBrightness(x + r1, y - 1, 150)
            led.plotBrightness(x, y - 2, 50)
            led.plotBrightness(x + r1, y - 2, 50)
            led.plotBrightness(x, y - 3, 0)
            led.plotBrightness(x + r1, y - 3, 0)
            y += 1
            basic.pause(100)
        } else if (x == 4) {
            r2 = 3
            led.plotBrightness(x, y, 255)
            led.plotBrightness(x - r2, y, 255)
            led.plotBrightness(x, y - 1, 150)
            led.plotBrightness(x - r2, y - 1, 150)
            led.plotBrightness(x, y - 2, 50)
            led.plotBrightness(x - r2, y - 2, 50)
            led.plotBrightness(x, y - 3, 0)
            led.plotBrightness(x - r2, y - 3, 0)
            y += 1
            basic.pause(100)
        } else {
            led.plotBrightness(x, y, 255)
            led.plotBrightness(x, y - 1, 150)
            led.plotBrightness(x, y - 2, 50)
            led.plotBrightness(x, y - 3, 0)
            y += 1
            basic.pause(100)
        }
    }
})
