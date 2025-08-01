// src/components/GallerySection.jsx
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

export default function GallerySection({ id, title, items }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="portfolio-total">
      <h2 id={id}>{title}</h2>
      <div className="portfolio-container">
        {items.map((item, i) => (
          <div
            key={i}
            className={item.type === "video" ? "video-container" : "image-container"}
            onClick={() => handleClick(i)}
          >
            {item.type === "video" ? (
              <video src={item.video} poster={item.poster} muted />
            ) : (
              <img src={item.image} alt={item.title} />
            )}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={items.map((item) =>
            item.type === "video"
              ? { type: "video", poster: item.poster, sources: [{ src: item.video, type: "video/mp4" }] }
              : { src: item.image }
          )}
          plugins={[Video]}
        />
      )}
    </section>
  );
}
