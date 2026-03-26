import { useState } from "react";
import "../styles/gallery.css";

export function Gallery({ images }) {
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return null;

  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  return (
    <div className="gallery">
      <div className="gallery__viewport">
        <img
          src={images[idx]}
          alt={`Screenshot ${idx + 1}`}
          className="gallery__img"
          draggable={false}
        />
        {images.length > 1 && (
          <>
            <button type="button" onClick={prev} className="gallery__arrow gallery__arrow--left" aria-label="Previous">
              &#8592;
            </button>
            <button type="button" onClick={next} className="gallery__arrow gallery__arrow--right" aria-label="Next">
              &#8594;
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="gallery__dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              className={`gallery__dot ${i === idx ? "active" : ""}`}
              aria-label={`Screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
