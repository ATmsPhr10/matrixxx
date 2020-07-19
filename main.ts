let x = 0
let random = 0
let y = -1
basic.forever(function () {
    random = randint(0, 4)
    if (random == 0) {
        x = 0
        while (y < 4) {
            y += 1
            led.plot(x, y)
            basic.pause(500)
        }
        y = -1
        while (y < 4) {
            y += 1
            led.setBrightness(led.brightness() - 30)
            led.unplot(x, y)
            basic.pause(500)
        }
    } else if (random == 1) {
        x = 1
        while (y < 4) {
            y += 1
            led.plot(x, y)
            basic.pause(200)
        }
        y = -1
        while (y < 4) {
            y += 1
            led.setBrightness(led.brightness() - 40)
            led.unplot(x, y)
            basic.pause(200)
        }
    } else if (random == 2) {
        x = 2
        while (y < 4) {
            y += 1
            led.plot(x, y)
            basic.pause(500)
        }
        y = -1
        while (y < 4) {
            y += 1
            led.setBrightness(led.brightness() - 30)
            led.unplot(x, y)
            basic.pause(500)
        }
    } else if (random == 3) {
        x = 3
        while (y < 4) {
            y += 1
            led.plot(x, y)
            basic.pause(200)
        }
        y = -1
        while (y < 4) {
            y += 1
            led.setBrightness(led.brightness() - 40)
            led.unplot(x, y)
            basic.pause(200)
        }
    } else if (random == 4) {
        x = 4
        while (y < 4) {
            y += 1
            led.plot(x, y)
            basic.pause(100)
        }
        y = -1
        while (y < 4) {
            y += 1
            led.unplot(x, y)
            basic.pause(100)
            led.setBrightness(led.brightness() - 50)
        }
    }
    y = -1
    led.setBrightness(255)
})
