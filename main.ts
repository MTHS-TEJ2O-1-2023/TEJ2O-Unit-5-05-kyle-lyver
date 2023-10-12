/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: OCt 2023
 * This program makes a traffic light
*/

let neopixelStrip: neopixel.Strip = null

// screen setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // Green
  basic.clearScreen()
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.show()
  basic.pause(1000)
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()

  // Yellow
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
  neopixelStrip.show()
  basic.pause(1000)
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()

  // Red
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.show()
  basic.pause(1000)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
})
