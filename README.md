# UAL Summer Study Abroad: Creative Computing 
Daily Reflections by Amy (Eunjong) Lee 

## Day 1 (2026/06/29)
<img width="270" alt="" src="./assets/1.png" /> <img width="270" alt="" src="./assets/1_2.png" /> <img width="270" alt="Image" src="./assets/1_3.png" /> 

Though it was my first time using Visual Studio Code, it wasn't too difficult to follow along since I had prior experience with Processing and was familiar with GitHub.

Based on my one-day experience of Processing, from a workshop conducted by artist [Jiho Park](https://www.jishopark.net/), I wanted to try more advanced prompts to depict a personal story.

I found a [rotateY();](https://beta.p5js.org/reference/p5/quad/) code that inspired me to create a kinetic portrait. I tend to switch up my makeup and style every day; thus, different people have told me that I look like different people. For example, friend A might say I look like celebrity X, while friend B might say I look like celebrity Y. I found it interesting that people realize various things within one face (me).

My portrait attempts to display this by having the pupils, eyes, nose, lips, and blush continuously change in colors and/or sizes, utilizing the random(); function. My two beauty marks remain static within the quick-changing environment, hinting that despite the changing features, this is still my face.

The biggest challenges I faced included finding the right shape for the hair and figuring out the grid for my eyebrows. I wasn't familiar with the arc(); function; thus, I had some trouble translating my hair onto a 2D canvas. I would have preferred to have a changing hairstyle. In addition, the quad(); code I used to draw my eyebrows was also quite strenuous to use, having to set four parameters for each vertex of the polygon. I still prefer analog methods of working through mathematics: using a paper and pen to draw and write out equations. Hence, understanding the p5.js coordinate system took some time.

## Day 2 (2026/06/30)

Learning about custom functions, loops, and arrays allowed me to create more complex and developed drawings in a more organized way. I found the textiles and loom examples especially interesting because I always saw similarities between objects related to computer/robotics and textiles. Working with Arduino, I like to see patterns within my jumper wires: the way they intertwine and mix, just like yarn or threads in textiles. In addition, I like to call a flat textile work a screen. Just like how my phone or computer screens are made of pixels, so many tiny pieces of color work to make a patterned whole in textiles. Surprisingly, I haven’t tried coding a textile pattern yet, so the exercises were very intuitive. 

<img height="205" alt="" src="./assets/2_3.png" /> <img height="205" alt="" src="./assets/2_5.png" /> <img height="205" alt="" src="./assets/2_6.png" />

I altered the owl_demo sketch so that the owls would appear and disappear in a heart shape. At first, I was simply practicing to familiarize myself with the p5.js coordinate system--something I was struggling with the day before. Then, I wanted to animate the static image. I asked an AI tool which function would be best suited for this. Although it gave me a code that smoothly faded the owls in and out, I wanted to stick with and play with functions I learned in class that day, so I used the if-else statements instead.

<img height="300" alt="" src="./assets/2_4.png" /> 

Lab 1: Again, I was playing around with the coordinates to create an interesting binary pattern. The [dust characters](https://en.wikipedia.org/wiki/Susuwatari) were originally simple circles. However, after learning a [star();](https://archive.p5js.org/examples/form-star.html) function, I replaced the circles to better depict the actual characters.

<img height="400" alt="" src="./assets/2.png" /> <img height="400" alt="" src="./assets/2_2.png" />

Lab 3: My main goal was to utilize the grid and translate(); features. In an attempt to advance from the methods I used in class with Lab 1, I incorporated count, spacing, and offset to efficiently produce an evenly spaced drawing instead of manually specifying each coordinate. I reused the shapes I made back in Lab 1, as I really liked the outcome. Originally, I only had the stars changing colors with the random(); function. However, over the week 1 weekend, I revised the code to have the dust characters rotate like the triangles in the anni_albers_sketch. Below is the final final sketch.

<img height="400" alt="" src="./assets/2_7.png" /> <img height="400" alt="" src="./assets/2_8.png" />

## Day 3 (2026/07/01)
<img height="410" alt="Image" src="./assets/3.png" /> <img height="410" alt="" src="./assets/3_2.png" /> 

I was inspired by an artwork, the [*Stress Inventory* by Laurie Frick](https://www.lauriefrick.com/stress-inventory). Combining skills from the previous two days, I wanted to utilize draw(); polygons, and practice organizing my drawing with grids. However, the process was much more complicated than what I had expected. 

The data CSV I chose (water quality) to work with had some missing data at random places. I worked with an AI tool to come up with a code that would identify these holes so that my code would check for valid data before use. Figuring this part out took the longest, as the other processes, like establishing a grid and drawing circles, were familiar actions. 

Larger red circles mean higher pH values. We could try to interpret this: too acidic or too alkaline water wouldn’t be ideal for aquatic life. Thus, circles not too big or not too small would indicate healthier water. 

Blue circles have their diameter based on Secchi values: how clear the water was. Higher Secchi values, or bigger blue circles, mean clearer water, which we can infer is generally better quality water. 

The yellow circles; however, are based on salinity values. We cannot tell much about water quality, as salinity is much more contextual compared to the previous two parameters. I added them over the week 1 weekend as a cherry on top because the drawing felt a bit boring. 

This drawing wasn’t really made to be informative. But, looking at it for long enough, it kind of feels like an optical mixing drawing. 

I also uploaded all my screenshots today and came across errors in the Terminal: some diverging branch problems. I am saving the codes I used for myself. 

git pull origin main --no-rebase
:wq
git push origin main

## Day 4 (2026/07/02)

Lab 1: In class, I started by figuring out how to load different images so the user can interact to control which photos are displayed. I had a basic code that loaded the image files at random places and a drawing tool to decorate the collage. 

<img height="235" alt="Image" src="./assets/4_3.png" /> <img height="235" alt="" src="./assets/4_4.png" />
<img height="410" alt="Image" src="./assets/4.png" /> <img height="410" alt="" src="./assets/4_2.png" />
*Self-taken photos used*

Lab 1: I edited the image files so they would look more like a collage when put together. Keeping the drawing tool and random location feature, I added a randomSize(); feature to make the picture more interesting. The bubbles were inspired by content I found online: a code Google Gemini summarized. However, there were many functions that I didn’t know of, including class, constructor, and float. The code is included in my Day 4 folder named bubble_from_online. Again, I didn’t want to work with an AI-produced code that I cannot follow along with; I did, however, learn about an opacity option in fill(); 

<img height="300" alt="Image" src="./assets/4_5.png" /> 

Lab 2: 

## Day 5 (2026/07/06)

<img height="200" alt="Image" src="./assets/5.png" /> <img height="200" alt="Image" src="./assets/5_2.png" /> <img height="200" alt="Image" src="./assets/5_8.png" /> 
<img height="220" alt="Image" src="./assets/5_3.png" /> <img height="220" alt="Image" src="./assets/5_4.png" /> 
<img height="150" alt="Image" src="./assets/5_7.png" /> <img height="150" alt="Image" src="./assets/5_5.png" /> <img height="150" alt="Image" src="./assets/5_6.png" />  

A series of creative applications of AI. A brief review of my exploration, corresponding to the order of screenshots.


- [Splash Canvas](https://artsandculture.google.com/experiment/splash-canvas/vQFCtQB7FDnYkA?hl=en): Here I tried to draw until I kind of agreed with what the squids were guessing. I appreciate how they tried to find meaning behind my thoughtless drawings.
- [Infinite Drum Machine](https://experiments.withgoogle.com/ai/drum-machine/view/): It felt like an anything-can-be-music example, something that used to be a trend back in the day. The mapped-out interface was interesting; again, I wonder what patterns the AI noticed to group the sounds like that.
- [ILA: Recurse Mix](https://infinite.mothquantum.com/):
- [Suno](https://www.suno.com): I see great opportunities within this AI tool: those who don't have the money to buy music equipment or the skills to create music from scratch could benefit from SUNO. I used it to create [something](https://suno.com/s/oyCoTEfCzdEFYdqZ) that sounds similar to what I have been listening to on loop recently, as the Spotify magic suggestions didn't do the job. Above are the pros, I anticipate, as there has been controversy regarding AI music with the trend of "GG EZ" by M.Sasuke.
- [Emoji Scavenger](https://archive.google/emojiscavengerhunt/): I found the miscommunication quite funny. Similar to how the Little Prince saw a snake swallowing an elephant instead of a hat, the guesses made by the AI make me wonder exactly what pattern or form made them think that. It felt like interacting with someone from a totally different background who does not speak any of the languages I speak. 
- [Teachable Machine](https://teachablemachine.withgoogle.com/): That I can make a personalized model excites me, as I have seen recent young artists using image detectors. For my experiment, though, I found it intriguing that the model fails to guess number two the most when I had fed it more images of two.
- [Even Stranger Things](https://evenstranger.pw/): Nothing much happened except classification and the same filter or graphic being placed on top of the images I uploaded.

A thought has always bothered me since I declared Art and Computation as my major. Whatever I make, it is already on the internet and usually in a better form. I am a beginner, so it makes sense: everyone starts with color charts and shading polygons. Because we have been practicing basic p5.js, making projects without much story or intent, I haven't been a fan of what I have made so far. This project, however, made me feel like I was making something more meaningful as I could add more context behind my code.

<img height="150" alt="Image" src="./assets/5_9.png" /> <img height="150" alt="Image" src="./assets/5_10.png" /> 
[Online Editor](https://editor.p5js.org/leechaeing/sketches/v_rZYQ75U)

Noonchi is a Korean word that reflects much culture, making it hard to translate into other languages. I am someone who uses a lot of noonchi to detect someone's mood. It may be disrespectful to declare someone's feelings; however, we do this to avoid conflict and care for another. Text and screens act as barriers, making it harder to guess others' moods: nuance, tone, etc., are also important factors to consider. I made a filter for users to announce their moods. I only have two moods as of now: sad and happy. By clicking the sad button, users can control the number of tears, showing the depth of their feelings. The happy button resets the tear counter and tracks the nose location to draw stars at random locations. There is also a textbox so that users can communicate their states.

Some difficulties I had were coding the blinking and mouth-opening features. I asked an AI tool how I should go about this, and it suggested using the ears to help calculate whether the eyes were closed by frame. Unfortunately, I could not make a code that worked. The code itself didn't seem to have much issue; rather, the API seemed to identify my eyes as nearly closed even when they weren't. I tried to utilize the mouth so that tears would be added when you open your mouth. Honestly, I was discouraged by the difficulty and the fact that adding tears by opening your mouth did not feel convincing.

A thought I had since the first session: What would be a difference between motion graphics and generative art? in what situation would you choose one method over the other?

## Day 6 (2026/07/07)

<img height="150" alt="Image" src="./assets/6.png" /> <img height="150" alt="Image" src="./assets/6_2.png" /> <img height="150" alt="Image" src="./assets/6_3.png" /> <img height="150" alt="Image" src="./assets/6_4.png" /> <img height="150" alt="Image" src="./assets/6_5.png" /> 

<img height="150" alt="Image" src="./assets/6_6.png" /> <img height="150" alt="Image" src="./assets/6_7.png" />

<img height="150" alt="Image" src="./assets/6_8.png" /> <img height="150" alt="Image" src="./assets/6_10.png" />


## Day 7 (2026/07/08)

<img height="150" alt="Image" src="./assets/7.png" /> <img height="150" alt="Image" src="./assets/7_2.png" />


## Day 8 (2026/07/09)

## Day 9 (2026/07/13)

## Day 10 (2026/07/14)

## Day 11 (2026/07/15)

## Day 12 (2026/07/16)
