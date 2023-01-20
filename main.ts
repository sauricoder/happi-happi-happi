input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        # . . . #
        . . . . .
        . # # # .
        `)
    music.playMelody("E G E G B C F B ", 120)
})
input.onSound(DetectedSound.Loud, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Fabulous)
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Forever)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Forever)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # . # .
        # . # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Forever)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
})
basic.showIcon(IconNames.Yes)
