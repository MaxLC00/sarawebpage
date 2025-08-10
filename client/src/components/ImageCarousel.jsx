import React, { useEffect, useRef, useState } from 'react';

export default function ImageCarousel({
  images = [],
  intervalMs = 3500,
  showArrows = true,
  showIndicators = true,
  className = '',
  title = 'Image carousel',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const total = images.length;

  useEffect(() => {
    if (total <= 1) return undefined;

    timerRef.current = setInterval(() => {
      setCurrentIndex((idx) => (idx + 1) % total);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [intervalMs, total]);

  if (!images || images.length === 0) return null;

  const goTo = (idx) => setCurrentIndex((idx + total) % total);
  const next = () => goTo(currentIndex + 1);
  const prev = () => goTo(currentIndex - 1);

  const getImageAt = (img, idx) => {
    if (typeof img === 'string') {
      return { src: img, alt: `${title} slide ${idx + 1}` };
    }
    if (img && typeof img === 'object') {
      const src = img.src ?? '';
      const alt = img.alt ?? `${title} slide ${idx + 1}`;
      return { src, alt };
    }
    return { src: '', alt: `${title} slide ${idx + 1}` };
  };

  return (
    <div className={`carousel ${className}`.trim()} aria-label={title}>
      {showArrows && total > 1 && (
        <>
          <button className="carousel-arrow left" onClick={prev} aria-label="Previous slide">‹</button>
          <button className="carousel-arrow right" onClick={next} aria-label="Next slide">›</button>
        </>
      )}
      {images.map((img, idx) => {
        const normalized = getImageAt(img, idx);
        return (
        <div
          key={idx}
          className={`carousel-slide ${idx === currentIndex ? 'active' : ''}`.trim()}
          aria-hidden={idx !== currentIndex}
        >
          <img src={normalized.src} alt={normalized.alt} />
        </div>
      );})}
      {showIndicators && total > 1 && (
        <div className="carousel-indicators">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`.trim()}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}


