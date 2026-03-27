"use client";

import YouTube from "react-youtube";

export default function YouTubePlayer({ videoId }: { videoId: string }) {
  return (
    <YouTube
      videoId={videoId}
      title="YouTube video player"
      opts={{
        width: "100%",
        height: "500px",
        playerVars: {
          autoplay: 0,
          controls: 1,
          showinfo: 0,
          rel: 0,
          loop: 0,
          mute: 0,
        },
      }}
    />
  );
}

