import React, { useState, useRef, useEffect } from 'react';

export const SoundPlayer = ({ sounds }) => {
  const [selectedSound, setSelectedSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const audioRef = useRef(null);

  // Reset selectedSound når sounds endres
  useEffect(() => {
    setSelectedSound(null);
    setIsPlaying(false);
    setIsDescriptionExpanded(false);
  }, [sounds]);

  // Håndter avspilling
  const togglePlay = () => {
    if (!selectedSound) return;

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  // Håndter gjenta
  const toggleRepeat = () => {
    setIsRepeating(!isRepeating);
  };

  // Håndter tidslinje klikk
  const handleTimeUpdate = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Håndter lyd endringer
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

      const handleEnded = () => {
        if (isRepeating) {
          audio.currentTime = 0;
          audio.play();
        } else {
          setIsPlaying(false);
        }
      };

      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [isRepeating]);

  // Oppdater lyd når selectedSound endres
  useEffect(() => {
    if (selectedSound && audioRef.current) {
      audioRef.current.load();
      setCurrentTime(0);
      setIsPlaying(false);
      setIsDescriptionExpanded(false); // Reset description expansion when sound changes
    }
  }, [selectedSound]);

  if (!sounds || sounds.length === 0) {
    return (
      <div className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-xl p-6 text-white">
        <p className="text-center">Ingen lyder tilgjengelig for dette dyret.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-xl p-3 sm:p-4 lg:p-5 text-white w-full max-w-md">
        <div className="flex items-center mb-3 sm:mb-4">
          <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🔊</span>
          <h3 className="text-base sm:text-lg font-semibold">Lyder & Lokking</h3>
        </div>

        <div className="mb-3 sm:mb-4 lg:mb-5">
          <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Velg lydtype:</label>
          <select
            value={selectedSound?.id || ''}
            onChange={(e) => {
              const sound = sounds.find(s => s.id === e.target.value);
              setSelectedSound(sound);
            }}
            className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-sm"
          >
            {!selectedSound && (
              <option value="" disabled hidden className="text-gray-900">Velg en lyd...</option>
            )}
            {sounds.map((sound) => (
              <option key={sound.id} value={sound.id} className="text-gray-900">
                {sound.name}
              </option>
            ))}
          </select>
        </div>

      {selectedSound && (
        <>
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-base sm:text-lg mr-2">ℹ️</span>
                <h4 className="font-medium text-sm sm:text-base">Om denne lyden</h4>
              </div>
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="text-white text-opacity-70 hover:text-opacity-100 transition-all"
              >
                {isDescriptionExpanded ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            </div>
            
            {isDescriptionExpanded && (
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-white text-opacity-90">
                  {selectedSound.description}
                </p>
                <p className="text-xs sm:text-sm">
                  <span className="font-medium">Bruksområde:</span> {selectedSound.usage}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-2 sm:space-y-3">
            {/* Tidslinje */}
            <div className="relative">
              <div
                className="w-full h-1.5 sm:h-2 bg-white bg-opacity-30 rounded-full cursor-pointer"
                onClick={handleTimeUpdate}
              >
                <div
                  className="h-full bg-white rounded-full transition-all duration-100"
                  style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
                />
              </div>
              <div className="flex justify-between text-xs text-white text-opacity-70 mt-1">
                <span>{Math.floor(currentTime / 60)}:{(currentTime % 60).toFixed(0).padStart(2, '0')}</span>
                <span>{selectedSound.duration}</span>
              </div>
            </div>

            {/* Kontroller */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <button
                onClick={togglePlay}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 border border-white border-opacity-30 text-white px-2 sm:px-3 py-2 h-8 rounded-lg transition-all flex items-center space-x-1 sm:space-x-2 text-sm"
              >
                <span className="text-base sm:text-lg">
                  {isPlaying ? '⏸' : '▷'}
                </span>
                <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Spill av'}</span>
                <span className="sm:hidden">{isPlaying ? 'Pause' : 'Spill av'}</span>
              </button>

              <button
                onClick={toggleRepeat}
                className={`px-2 sm:px-3 py-2 h-8 rounded-lg border transition-all flex items-center justify-center ${
                  isRepeating
                    ? 'bg-white bg-opacity-30 border-white border-opacity-50 text-white'
                    : 'bg-white bg-opacity-10 border-white border-opacity-30 text-white text-opacity-70 hover:bg-opacity-20'
                }`}
                title="Gjenta lyd"
              >
                <span className="text-sm sm:text-base">{'↺'}</span>
              </button>
            </div>
          </div>

          {/* Audio element */}
          <audio
            ref={audioRef}
            src={selectedSound.audioUrl}
            preload="metadata"
            className="hidden"
          />
        </>
      )}
      </div>
    </div>
  );
};
