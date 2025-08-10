import React from 'react';

function extractYouTubeId(input) {
  if (!input) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

  try {
    const url = new URL(input);
    const host = url.hostname.replace('www.', '');

    if (host === 'youtu.be') {
      const id = url.pathname.split('/').filter(Boolean)[0];
      return id || null;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (url.searchParams.get('v')) return url.searchParams.get('v');
      const path = url.pathname;
      const embedMatch = path.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
      if (embedMatch) return embedMatch[1] || null;
      const shortsMatch = path.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
      if (shortsMatch) return shortsMatch[1] || null;
    }
  } catch (_) {
    // not a URL, fall through
  }

  return null;
}

export default function YouTubeEmbed({ url, id, title = 'YouTube video', className = '' }) {
  const videoId = id ?? extractYouTubeId(url);
  if (!videoId) return null;

  const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <div className={`video-embed ${className}`.trim()}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}


