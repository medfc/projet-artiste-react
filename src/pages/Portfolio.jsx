import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../assets/portfolio.css";
import { fetchPortfolioData } from "../api/portfolioApi";
import GallerySection from "../components/GallerySection";
import ScrollingText from "../components/ScrollingText";
import useScrollToTopOnMount from "../hooks/useScrollToTopOnMount";

function Portfolio() {
  // Remet la page en haut au montage
  useScrollToTopOnMount();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupération des données au montage
  useEffect(() => {
    fetchPortfolioData()
      .then((portfolio) => {
        setData(portfolio);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des données :", err);
        setError("Impossible de charger le portfolio pour le moment.");
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <Helmet>
        <title>Portfolio - Photographe Alban Kevin</title>
        <meta
          name="description"
          content="Découvrez le portfolio d'Alban Kevin : portraits, voyages, photographies éditoriales et reportages d'événements capturant des moments uniques."
        />
      </Helmet>

      <div id="portfolio-banner" className="welcome-banner">
        <h2>Portfolio</h2>
      </div>

      {/* Gestion du chargement et des erreurs */}
      {loading && <p className="loading-text">Chargement en cours...</p>}
      {error && <p className="error-text">{error}</p>}

      {/* Affichage principal uniquement si les données sont prêtes */}
      {!loading && !error && data && (
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
