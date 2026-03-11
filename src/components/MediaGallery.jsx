import React, { useState, useEffect, useRef } from 'react';

export const MediaGallery = ({ media, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mediaFilter, setMediaFilter] = useState('bilder'); // 'bilder', 'videoer'
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Debug logging
  console.log('MediaGallery rendered with media:', media);
  console.log('MediaGallery title:', title);

  if (!media || media.length === 0) return null;

  // Filtrer media basert på valgt filter
  const getFilteredMedia = () => {
    if (mediaFilter === 'bilder') {
      return media.filter(item => item.type === 'image');
    } else if (mediaFilter === 'videoer') {
      return media.filter(item => item.type === 'video');
    }
    return media.filter(item => item.type === 'image'); // Default to images
  };

  const filteredMedia = getFilteredMedia();
  const hasImages = media.some(item => item.type === 'image');
  const hasVideos = media.some(item => item.type === 'video');
  const showFilterButtons = hasImages && hasVideos;
  
  // Filtrer kun bilder for fullskjerm-navigasjon
  const imageOnlyMedia = media.filter(item => item.type === 'image');

  // Oppdater currentIndex hvis det er utenfor rekkevidde etter filtrering
  React.useEffect(() => {
    if (currentIndex >= filteredMedia.length) {
      setCurrentIndex(0);
    }
  }, [filteredMedia.length, currentIndex]);

  const currentMedia = filteredMedia[currentIndex] || filteredMedia[0];

  // Automatisk sett riktig filter når det kun er én type media
  React.useEffect(() => {
    if (hasImages && !hasVideos) {
      setMediaFilter('bilder');
    } else if (!hasImages && hasVideos) {
      setMediaFilter('videoer');
    } else if (hasImages && hasVideos) {
      // Hvis det er både bilder og videoer, start med bilder
      setMediaFilter('bilder');
    }
  }, [hasImages, hasVideos]);

  // Stopp video når vi bytter til annen media
  React.useEffect(() => {
    if (videoRef.current && currentMedia && currentMedia.type !== 'video') {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentIndex, currentMedia?.type]);

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredMedia.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredMedia.length) % filteredMedia.length);
  };

  // Navigasjon kun for bilder i fullskjerm
  const nextImage = () => {
    const currentImageIndex = imageOnlyMedia.findIndex(img => img === currentMedia);
    const nextIndex = (currentImageIndex + 1) % imageOnlyMedia.length;
    const nextImage = imageOnlyMedia[nextIndex];
    const newIndex = filteredMedia.findIndex(item => item === nextImage);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const currentImageIndex = imageOnlyMedia.findIndex(img => img === currentMedia);
    const prevIndex = (currentImageIndex - 1 + imageOnlyMedia.length) % imageOnlyMedia.length;
    const prevImage = imageOnlyMedia[prevIndex];
    const newIndex = filteredMedia.findIndex(item => item === prevImage);
    setCurrentIndex(newIndex);
  };

  const openFullscreen = () => {
    // Kun åpne fullskjerm for bilder
    if (currentMedia && currentMedia.type === 'image') {
      setIsFullscreen(true);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleImageError = () => {
    console.warn('Image failed to load:', currentMedia?.url);
    setImageError(true);
  };

  const handleVideoError = () => {
    console.warn('Video failed to load:', currentMedia?.url);
    setVideoError(true);
  };

  // Reset error states when media changes
  React.useEffect(() => {
    setImageError(false);
    setVideoError(false);
  }, [currentIndex, currentMedia]);

  // Try-catch wrapper for error handling
  try {
    // Early return if no currentMedia
    if (!currentMedia) {
      console.warn('No currentMedia available');
      return null;
    }

    return (
      <>
        <div>
        <div className="flex items-center justify-start mb-3">
          {/* Filtreringsknapper - vis alltid hvis det er media */}
          {(hasImages || hasVideos) && (
            <div className="flex space-x-2">
              {/* Vis "Bilder" knapp hvis det er bilder */}
              {hasImages && (
                <button
                  onClick={() => setMediaFilter('bilder')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    mediaFilter === 'bilder'
                      ? 'text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                  }`}
                  style={mediaFilter === 'bilder' ? {backgroundColor: '#22714D'} : {}}
                >
                  <span className="mr-1">📷</span>
                  Bilder ({media.filter(item => item.type === 'image').length})
                </button>
              )}
              
              {/* Vis "Videoer" knapp hvis det er videoer */}
              {hasVideos && (
                <button
                  onClick={() => setMediaFilter('videoer')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    mediaFilter === 'videoer'
                      ? 'text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                  }`}
                  style={mediaFilter === 'videoer' ? {backgroundColor: '#22714D'} : {}}
                >
                  <span className="mr-1">🎥</span>
                  Videoer ({media.filter(item => item.type === 'video').length})
                </button>
              )}
            </div>
          )}
        </div>
        
        <div className="relative">
          <div className="relative group">
             {currentMedia.type === 'image' ? (
               imageError ? (
                 <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                   <div className="text-center text-gray-500">
                     <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                     <p className="text-sm">Bilde kunne ikke lastes</p>
                   </div>
                 </div>
               ) : (
                 <img
                   src={currentMedia.url}
                   alt={currentMedia.alt || currentMedia.caption}
                   className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                   onClick={openFullscreen}
                   onError={handleImageError}
                 />
               )
             ) : currentMedia.type === 'video' ? (
               videoError ? (
                 <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                   <div className="text-center text-gray-500">
                     <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                     </svg>
                     <p className="text-sm">Video kunne ikke lastes</p>
                   </div>
                 </div>
               ) : (
                 <div className="relative group">
                   <video
                     ref={videoRef}
                     src={currentMedia.url}
                     poster={currentMedia.thumbnail}
                     className="w-full h-64 object-cover rounded-lg"
                     onEnded={handleVideoEnd}
                     onPlay={handleVideoPlay}
                     onPause={handleVideoPause}
                     onError={handleVideoError}
                     controls
                   />
                   
                   {currentMedia.duration && (
                     <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded z-10">
                       {currentMedia.duration}
                     </div>
                   )}
                 </div>
               )
             ) : null}
            
            {/* Fullscreen button in top right corner - kun for bilder */}
            {currentMedia && currentMedia.type === 'image' && (
              <button
                onClick={openFullscreen}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-2 rounded-full transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            )}
          </div>

          {/* Media info */}
          {currentMedia && currentMedia.caption && (
            <p className="text-sm text-gray-600 mt-2">{currentMedia.caption}</p>
          )}

          {/* Navigation arrows and dots for multiple media */}
          {filteredMedia.length > 1 && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg z-10"
                style={{ 
                  top: currentMedia && currentMedia.caption ? 'calc(50% - 1rem)' : '50%' 
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg z-10"
                style={{ 
                  top: currentMedia && currentMedia.caption ? 'calc(50% - 1rem)' : '50%' 
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center space-x-2 mt-3">
                {filteredMedia.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="w-2 h-2 rounded-full transition-colors"
                    style={{backgroundColor: index === currentIndex ? '#22714D' : '#D1D5DB'}}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-7xl max-h-full flex flex-col items-center justify-center">
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Media container - kun for bilder */}
            <div className="flex-1 flex items-center justify-center w-full min-h-0">
              {currentMedia && currentMedia.type === 'image' && (
                imageError ? (
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-lg">Bilde kunne ikke lastes</p>
                  </div>
                ) : (
                  <img
                    src={currentMedia.url}
                    alt={currentMedia.alt || currentMedia.caption}
                    className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain"
                    onError={handleImageError}
                  />
                )
              )}
            </div>

            {/* Caption under media */}
            {currentMedia && currentMedia.caption && (
              <div className="w-full max-w-4xl mt-4 bg-black bg-opacity-70 text-white p-4 rounded-lg">
                <p className="text-center">{currentMedia.caption}</p>
              </div>
            )}

            {/* Fullscreen navigation - kun for bilder */}
            {imageOnlyMedia.length > 1 && currentMedia && currentMedia.type === 'image' && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full z-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full z-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Fullscreen dots - kun for bilder */}
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {imageOnlyMedia.map((image, index) => {
                    const imageIndex = filteredMedia.findIndex(item => item === image);
                    return (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(imageIndex)}
                        className="w-3 h-3 rounded-full transition-colors"
                        style={{backgroundColor: imageIndex === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)'}}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
  } catch (error) {
    console.error('MediaGallery error:', error);
    return (
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-500">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-sm">En feil oppstod ved lasting av media</p>
        </div>
      </div>
    );
  }
};
