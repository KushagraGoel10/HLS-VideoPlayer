//Using HLS(Http live streaming) way with video.js- 
// Loads videos in chunks, adapts to user's network speed, no need to download whole video, reduces react app load.
// Basically it is a good optimized way of adding videos in react app. 

import React, { useRef, useEffect, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (videoRef.current) {
      const newPlayer = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        responsive: true,
        fluid: true,
        sources: [{ src: videoUrl, type: 'application/x-mpegURL' }],
      });

      newPlayer.on('error', () => {
        console.error('Video.js Error:', newPlayer.error());
      });

      setPlayer(newPlayer);
    }

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [videoUrl]);

// 
  return (
    <div>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

export default VideoPlayer;
