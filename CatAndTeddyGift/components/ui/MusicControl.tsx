"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface MusicControlProps {
  enabled?: boolean;
  src?: string;
}

export default function MusicControl({
  enabled = true,
  src = "/music/surprise.mp3",
}: MusicControlProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!enabled) {
      audioRef.current?.pause();
      audioRef.current = null;
      setPlaying(false);
      return;
    }

    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    const handleEnded = () => setPlaying(false);
    const handlePause = () => setPlaying(false);
    const handlePlay = () => setPlaying(true);

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
      audioRef.current = null;
    };
  }, [enabled, src]);

  if (!enabled) return null;

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      setPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-label={playing ? "Turn music off" : "Turn music on"}
      aria-pressed={playing}
      className="
        fixed right-4 top-4 z-[80]
        flex h-11 w-11 items-center justify-center
        rounded-full border border-white/30
        bg-white/70 text-[#8c5369]
        shadow-md backdrop-blur
        transition hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
      "
    >
      {playing ? (
        <Volume2 size={19} strokeWidth={1.8} />
      ) : (
        <VolumeX size={19} strokeWidth={1.8} />
      )}
    </button>
  );
}