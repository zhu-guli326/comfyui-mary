import { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = document.getElementById('background-music') as HTMLAudioElement;
    if (audioElement) {
      setAudio(audioElement);
      audioElement.volume = volume / 100;
    }
  }, []);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    if (audio) {
      audio.volume = volume / 100;
    }
  }, [volume, audio]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setVolume(volume === 0 ? 50 : 0);

  return (
    <div className="flex items-center space-x-2">
      <button onClick={togglePlay} className="text-white">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={toggleMute} className="text-white">
        {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="w-20"
      />
    </div>
  );
};

export default MusicPlayer;