Lily Johnson, Section 50

[Live Sketch Link](file:///Users/lily/Documents/paperz/Creative%20Coding/creativecoding-work/coursework/hw-7/index.html)

# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

The original code makes a sketch of a ball that bounces around the screen and changes direction toward your cursor when the mouse is clicked. In the setup, the canvas is created and the background is colored white. In the draw function, the first if statement sets the X-axis bounds of the circle by saying that if it is greater than or equal to the width, or less than or equal to 0, it will multiply itself by -1, thus reversing its direction. The next if statement does the same thing with the Y-axis. Then, the ellipse is created and colored white. In the mousePressed function, the X-axis of the circle is mapped to the X-axis of the mouse, so when the mouse is pressed, the circle will come toward the cursor. This is repeated with the Y-axis.

## How did you alter the sketch?

In this sketch, I added an ellipse in the middle that changes color depending on what quadrant of the canvas your cursor is in. I also made the ball shift slowly from white to black and back again as it travels.
