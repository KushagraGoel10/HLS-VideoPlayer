import React from 'react';
import VideoPlayer from './Components/VideoPlayer';

const App = () => {
  // Sample HLS video URL
  const videoUrl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
  const videoUrl2='https://content.jwplatform.com/manifests/yp34SRmf.m3u8';

  return (
    <div className="App">
      <h1 className="text-center">HLS Video Player ( Optimized) </h1>
      <VideoPlayer videoUrl={videoUrl} />
      <h1>2nd video</h1>
      <VideoPlayer videoUrl= {videoUrl2} />
    </div>
  );
};

export default App;
