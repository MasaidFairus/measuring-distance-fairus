basic.showIcon(IconNames.Happy)
basic.showString("HELLO I AM YOUR OBJECT DETECTOR")
music.playMelody("- - - C B A - C ", 120)
basic.forever(function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    basic.showNumber(Tinybit.Ultrasonic_Car())
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    if (Tinybit.Ultrasonic_Car() > 20) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    }
})
