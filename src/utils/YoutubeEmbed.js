import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const YouTubeEmbed = ({ videoId, title, className, showFooter = true }) => {
  const [isPlayerActive, setPlayerActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [thumbnailError, setThumbnailError] = useState(false);

  // Use maxresdefault for HD thumbnail first, fallback to hqdefault if not available
  const [thumbnailQuality, setThumbnailQuality] = useState('maxresdefault');
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  useEffect(() => {
    // Reset states when video ID changes
    setIsLoading(true);
    setThumbnailError(false);
    setPlayerActive(false);
  }, [videoId]);

  const handleThumbnailError = () => {
    if (thumbnailQuality === 'maxresdefault') {
      // Fallback to standard high quality
      setThumbnailQuality('hqdefault');
    } else {
      setThumbnailError(true);
    }
  };

  return (
    <div className={`youtube-embed-wrapper ${className || ''} mx-auto max-w-4xl`}>
      <div className="rounded-xl overflow-hidden border-2 border-gray-300 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out dark:bg-gray-900 dark:border-gray-700">
        {/* Title Bar */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600 flex items-center justify-between">
          <h3 className="text-gray-800 dark:text-gray-100 text-base font-semibold tracking-wide">
            {title || 'YouTube Video Player'}
          </h3>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Video or Thumbnail */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          {!isPlayerActive ? (
            <div
              className="cursor-pointer group absolute inset-0 overflow-hidden bg-black"
              onClick={() => setPlayerActive(true)}
              role="button"
              aria-label={`Play video: ${title}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault(); // Prevent scrolling for Space key
                  setPlayerActive(true);
                }
              }}
            >
              {/* Loading Indicator */}
              {isLoading && !thumbnailError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
              )}

              {/* Thumbnail Image */}
              <img
                src={thumbnailUrl}
                alt={`Thumbnail for ${title}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
                onLoad={() => setIsLoading(false)}
                onError={handleThumbnailError}
                style={{ display: isLoading ? 'none' : 'block' }}
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300">
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute w-full bottom-0 left-0 bg-gradient-to-t from-black to-transparent h-24 opacity-60"></div>
              </div>
              {/* Branding Badge (Displays "IET AGRA") */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                <span className="font-medium">IET AGRA</span>
              </div>
            </div>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title || 'YouTube Video Player'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Footer Branding */}
        {showFooter && (
          <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6z" />
                  <path d="M21.56 7.17c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
                <span className="ml-1.5 font-medium text-sm">IET Agra TnP Cell</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">©{new Date().getFullYear()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

YouTubeEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  showFooter: PropTypes.bool,
};

export default YouTubeEmbed;
