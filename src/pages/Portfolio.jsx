import { useState, useEffect } from "react";
import "../assets/portfolio.css";
import { fetchPortfolioData } from "../api/portfolioApi";
import GallerySection from "../components/GallerySection";
import ScrollingText from "../components/ScrollingText";
import useScrollToTopOnMount from "../hooks/useScrollToTopOnMount";


function Portfolio() {
  useScrollToTopOnMount();

  // 🔧 Tu ajoutes ceci ici :
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPortfolioData().then(setData);
  }, []);

  return (
    <main>
      <div id="portfolio-banner" className="welcome-banner">
        <h2>Portfolio</h2>
      </div>

      {/* ✅ Tu affiches seulement si les données sont chargées */}
      {data && (
        <>
          <GallerySection
            id="anchor-portrait"
            title="L’art du portrait à travers l’émotion et l’authenticité."
            items={data.portrait}
          />
          <GallerySection
            id="anchor-trip"
            title="Voyages inoubliables à travers des paysages et des cultures fascinantes"
            items={data.voyage}
          />
          <GallerySection
            id="anchor-editorial"
            title="Photographie éditoriale, entre esthétisme et storytelling visuel"
            items={data.editorial}
          />
          <GallerySection
            id="anchor-event"
            title="Mariages, Reportages d’événements capturant l’émotion du moment."
            items={data.evenement}
          />
        </>
      )}

      <ScrollingText />
    </main>
  );
}

export default Portfolio;
