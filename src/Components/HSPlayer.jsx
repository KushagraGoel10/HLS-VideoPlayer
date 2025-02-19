import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const HLSPlayer = ({ src, width = "640px", height = "360px" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }
  }, [src]);

  return (
    <div className="flex justify-center items-center">
      <video ref={videoRef} width={width} height={height} controls />
    </div>
  );
};

export default HLSPlayer;
