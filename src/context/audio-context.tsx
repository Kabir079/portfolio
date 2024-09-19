"use client";

import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  setAudioSource: (src: string) => void;
  setVolume: (volume: number) => void;
  volume: number;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState('/tenderness.mp3');
  const [volume, setVolume] = useState(0.69);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error('Playback error:', e));
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const setAudioSource = useCallback((src: string) => {
    setAudioSrc(src);
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.currentTime = 0;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error('Playback error:', e));
      }
    }
  }, [isPlaying]);

  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => {
        setIsPlaying(false);
        audio.currentTime = 0;
      };
      
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);
      
      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [volume]);

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, setAudioSource, setVolume: handleVolumeChange, volume }}>
      <audio ref={audioRef} src={audioSrc} loop />
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
