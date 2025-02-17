HLS VideoPlayer ->
( HTTP LIVE STREAMING Player) 

I've coded this videoplayer using video.js to optimize our react app for videos. 
It has some features such as - 

1) It loads videos in chunks.
2) It adapts to user's internet speed i.e quality of the video depends on how fast a user's internet is.
3) No need to download the complete video as it loads in chunks.
4) It reduces our react app load.

I have used Video.js here as it supports both HLS and DASH. 


Hls.js- 
Further Planning to implement hls.js for more optimization, as it is already a pre-built library for this. 
It is even more optimized, where you can actually see the small chunk of video loads and then it vanishes as soon as it moves to more further part of the video. 
There's a demo website which shows the same thing with multiple video buffers visualization and showing the chunk fading in and out. 

Have a try out here-> https://hlsjs.video-dev.org/demo/
