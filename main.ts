input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Fabulous)
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
