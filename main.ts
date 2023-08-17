function chek_key () {
    user_key = temp
    serial.writeLine(user_key)
    if (user_key == key) {
        basic.pause(100)
        basic.showNumber(secret)
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Happy)
    } else if (user_key.length > user_key.length) {
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Ghost)
    }
}
input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    basic.showString("A")
    chek_key()
})
input.onButtonPressed(Button.B, function () {
    temp = "" + user_key + "B"
    basic.showString("B")
    chek_key()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
})
let temp = ""
let user_key = ""
let key = ""
let secret = 0
secret = 614
key = "AABB"
user_key = ""
