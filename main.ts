let r = 0
let g = 0
let b = 0
basic.forever(function () {
    basic.pause(1000)
    r = NaturalScience.getRed()
    g = NaturalScience.getGreen()
    b = NaturalScience.getBlue()
    serial.writeValue("r", r)
    serial.writeValue("g", g)
    serial.writeValue("b", b)
})
basic.forever(function () {
    if (r > 50 && (g < 25 && b < 25)) {
        basic.showString("r")
    } else if (g > 80 && (r < 80 && b < 80)) {
        basic.showString("g")
    } else if (b > 80 && (r < 80 && g < 80)) {
        basic.showString("b")
    } else if (r > 80 && (g > 80 && b < 80)) {
        basic.showString("y")
    } else if (r > 100 && (g > 60 && b < 80)) {
        basic.showString("o")
    } else if (b > 80 && (r > 80 && g < 80)) {
        basic.showString("p")
    } else {
        basic.showString(" ")
    }
})
