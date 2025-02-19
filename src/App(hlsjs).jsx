import React from "react";
import HLSPlayer from "./Components/HSPlayer";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
        <h1>using hls js</h1>
      <HLSPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
    </div>
  );
};

export default App;
