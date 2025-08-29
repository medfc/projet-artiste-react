
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

export default function GallerySection({ id, title, items }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpenMedia = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="portfolio-total">
      <h2 id={id}>{title}</h2>

      <div className="portfolio-container">
        {items.map((item, i) =>
          item.type === "video" ? (
            <div key={i} className="video-container">
              <div className="video-frame">
                <video
                  poster={item.poster}
                  playsInline
                  preload="metadata"
                  aria-label={item.title}
                  muted
                >
                  <source src={item.video} type="video/mp4" />
                </video>
                <button
                  className="play-button"
                  aria-label="Lire la vidéo en plein écran"
                  onClick={() => handleOpenMedia(i)}
                ></button>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ) : (
            <div
              key={i}
              className="image-container"
              onClick={() => handleOpenMedia(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" ? handleOpenMedia(i) : null
              }
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          )
        )}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={items.map((item) =>
            item.type === "video"
              ? {
                  type: "video",
                  poster: item.poster,
                  sources: [{ src: item.video, type: "video/mp4" }],
                  autoPlay: true, // lecture auto en plein écran
                }
              : { src: item.image }
          )}
          plugins={[Video]}
        />
      )}
    </section>
  );
}
