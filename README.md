# three-js-anoshaminai

# Anosha Minai - CandyLand 

# Link to GitHub Pages site
https://pennvr.github.io/three-js-anoshaminai/

# Techniques used
To generate the pseudorandom terrain, I used a Perlin Noise implementation to add noise to the y-values of the floor plane. The Perlin 
Noise generates a nice-looking random distribution that takes into account the vertices original position and the positions of nearby
vertices. I created the gradient effect by coloring each vertex of each face a different color.

To generate the fireworks, I created sphere objects with psuedorandom x and z coordinates and incremented their y position 
until they reached a certain height (randomized within a range). Upon reaching the height, I created 4 'bit' geometries 
representing the exploded particles that fall back to the plane with an added x-movement. 

# Instructions on building/assembling/etc. Also document how to run the code
There is no need to download or run anything, just click the demo link above. Note that for VR a browser with WebVR capability
is required. 

# When in VR mode, did you feel any motion sickness? Why and why not?
I didn't feel any motion sickness, 

# What was the hardest part of the assignment?
Getting a handle on the particulars of graphics programming was a challenge for me. Understanding conceptually
how to manipulate a mesh, how different coloring and lighting schemes will create different effects, how changing object 
positions in a certain way will cause certain results - all of those were things that I had to learn by doing, but it took
a while to figure things out. Three.js has so much power and I know that there is so much I could have done to increase
the visuals of my project.

I also struggled with implementing the fireworks. In the end, my "fireworks" do not look like fireworks as much as 
particle explosions. 

# What do you wish you’d done differently?
I wish I had been more successful at making the fireworks look realistic both in coloring and in movement. It would have 
been cool to use some shader code to create a more light-like effect of the fireworks. At one point, I made my fireworks 
point lights, and I loved the way that looked - it would have been cool to find a lower-cost way to mimic that look. I think that using
PointMaterial would have been a better option. I also wish that I had taken some more time to design my firework implementation - 
in the end, I feel that my implementation is a bit disorganized and took longer to debug than necessary.

# What do you wish we had done differently?
It would have been nice to have more time with Three.js and to be exposed to more of the advanced features. For example,
I would have liked to have a simple prototype due perhaps earlier, and then to have had some time in class to explore 
various ways that we could have improved our landscapes. My particular interest would be in understanding light, surfaces,
and materials more. 
