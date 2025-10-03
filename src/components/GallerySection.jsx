import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

export default function GallerySection({ id, title, items }) {
  // Gestion etat: la lightbox et index de l’élément courant
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  // Ouvrir la lightbox sur l’élément cliqué
  const handleOpenMedia = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="portfolio-total">
      {/* Titre de la section */}
      <h2 id={id}>{title}</h2>

      {/* Affichage des médias (images ou vidéos) */}
      <div className="portfolio-container">
        {items.map((item, i) =>
          item.type === "video" ? (
            // Bloc vidéo
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
            // Bloc image
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
              <img src={item.image} alt={item.alt} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          )
        )}
      </div>

      {/* Lightbox avec support vidéo et image */}
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
                  autoPlay: true
                }
              : { src: item.image }
          )}
          plugins={[Video]}
        />
      )}
    </section>
  );
}
