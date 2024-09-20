import React from "react";
import { useAudio } from "../context/audio-context";

export function MusicButton() {
  const { isPlaying, togglePlay } = useAudio();
  return (
    <button className="cursor-pointer" onClick={() => togglePlay()}>
      {isPlaying && <img src="/audio-btn.svg" alt="Audio button" />}
      {!isPlaying && <span>Music off</span>}
    </button>
  );
}
