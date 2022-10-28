# chomper
A MIT xPro coding boot camp project

An animation of a popular chomping ball character that will remain anonymous in case it might be a copyright violation.  I'm not a lawyer and I don't play one on TV.

## Goal
The goal of the original assignment was to control a "PacMan" image to simulate it moving across the screen and reversing direction using the HTML DOM.  It was also to show off your coding skills by calling the appropriate one of four images (PacMan with his mouth open or shut, facing right or left).  The original upload of this was coded to meet that requirement and mostly matched the original lesson plan.  The only difference being a separate function to determine if the character was at the boundary box.  I do not like one-line functions unless they're called repeatedly.  This was called a single time and there was no need for abstraction.

Version 2: I then decided to get snazzy with it and skip the images and just draw shapes, a la the original PacMan.  I used CSS and the HTML DOM to create a yellow circle, a white diamond that sometimes overlaid part of the circle and a black circle for the eye.  I then animated and adjusted their positions relative to eachother to have it chomp across the screen and back again.  There was math involved.

## Installation
It's a single html file and four image files.  All five files need to be in the same directory.
UPDATE:  Version 2 only uses the single html file.

## License
GNU General Public License v3.0

## Contact Me
You can reach me through LinkedIn.  https://www.linkedin.com/in/sparksnicole/ 

## Future Upgrades
### Image
* I may try using css' transform:rotate to have the image go around the edges of the window.
* I'd like to abstract the size of the our animated character
* the original started when clicked and then ran indefinitely.  Version 2 just runs indefinitely.  A future version will use animation frames to track how long it's running and eventually shut off.
* possibly have the little cookies that PacMan would chomp show up and disappear as he moves across them (then reappear when he turns around?)

