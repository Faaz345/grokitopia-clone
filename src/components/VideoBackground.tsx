import React from 'react';
import { useLocation } from "react-router-dom";

const VideoBackground = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);

  // Don't render video on features or about pages
  if (path === 'features' || path === 'about') {
    return null;
  }

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-auto h-auto object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground; 