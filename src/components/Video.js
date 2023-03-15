import { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    //   video
    <div className="relative bg-white w-full h-full snap-start my-6 rounded-2xl">
      {/* video_player */}
      <video
        className="object-fill w-full h-full"
        src="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}
