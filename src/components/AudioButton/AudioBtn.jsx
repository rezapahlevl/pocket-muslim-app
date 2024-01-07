import { useRef, useState, useEffect } from "react";
import { PiPlayPauseFill } from "react-icons/pi";

const AudioBtn = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleCanPlayThrough = () => {
      // Audio is loaded and can be played without interruptions
      if (isPlaying) {
        audioElement.play();
      }
    };
  }, [audioUrl, isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleNewAudioPlay = () => {
    // Pause the previous audio when a new audio starts playing
    const allAudioElements = document.querySelectorAll("audio");
    allAudioElements.forEach((audioElement) => {
      if (audioElement !== audioRef.current) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    });
  };
  return (
    <>
      <div className="">
        <audio
          ref={audioRef}
          src={audioUrl}
          // onEnded={handleAudioEnded}
          onPlay={handleNewAudioPlay}
        />
        <button
          onClick={togglePlayPause}
          className="btn btn-neutral hover:bg-base-400"
        >
          {/* <Play size={20} /> */}
          <PiPlayPauseFill size={20} />
        </button>
      </div>
    </>
  );
};

export default AudioBtn;
