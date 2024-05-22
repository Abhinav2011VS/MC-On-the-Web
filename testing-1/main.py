# main.py

import numpy as np
import pyglet
import nbtlib
import base36
import pyglm

# Example usage of the imported libraries
print("NumPy version:", np.__version__)
print("Pyglet version:", pyglet.version)
print("Base36 encoded 12345:", base36.dumps(12345))
vec = pyglm.vec3(1, 2, 3)
print("Created a 3D vector using pyglm:", vec)
