"""
Created by: Kyle Lyver
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

num_pixels = 12
np = neopixel.NeoPixel(pin16, 4)

while True:
    if button_a.is_pressed():
        np[2] = (0, 255, 0)
        np.show()
        sleep(1000)
        np[2] = (0, 0, 0)
        np[1] = (255, 255, 0)
        np.show()
        sleep(1000)
        np[1] = (0, 0, 0)
        np.show()
        np[0] = (255, 0, 0)
        np.show()
        sleep(1000)
        np[0] = (0, 0, 0)
        np.show()
