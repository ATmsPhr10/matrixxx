let lumen: number[] = []
let x = 0
let y = 0
basic.forever(function () {
    lumen = [255, 150, 50]
    x = randint(0, 4)
    y = 0
    while (y < 8) {
        for (let a = 0; a <= 3; a++) {
            led.plotBrightness(x, y - a, lumen[a])
        }
        y += 1
        basic.pause(200)
    }
})
