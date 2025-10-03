import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";
import useScrollToTopOnMount from "../hooks/useScrollToTopOnMount";
import ScrollingText from "../components/ScrollingText";
import "../assets/style.css";

function Home() {
// Remonte en haut de la page au montage
  useScrollToTopOnMount();
// Images utilisées pour le slider
const images = [
  { src: "/images/index/portrait.webp", alt: "Portrait d'une jeune femme avec cheveux attachés et fond rose" },
  { src: "/images/index/mariage.webp", alt: "Mariée de profil tenant un bouquet de fleurs en extérieur" },
  { src: "/images/index/voyage.webp", alt: "Photographe en randonnée devant une cascade en montagne" },
  { src: "/images/index/paysage-urbain.webp", alt: "Rue urbaine vue d'en haut avec voitures et immeubles" },
  { src: "/images/index/marriage-2.webp", alt: "Couple de mariés posant sur un pont en pierre dans un décor romantique" },
  { src: "/images/index/shooting.webp", alt: "Femme en manteau marchant dans un couloir avec arcades" }
];

// Gestion d'etat pour le slider et la vidéo
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Défilement automatique du slider toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Gestion Safari : forcer muted et playsInline
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
  }, []);

  return (
    <div>
      <Helmet>
        <title>Accueil - Photographe Alban Kevin</title>
        <meta
          name="description"
          content="Découvrez l'univers photographique d'Alban Kevin : portraits, mariages, voyages et reportages. Chaque couleur raconte une histoire."
        />
      </Helmet>

      <main>
        {/* Section de présentation */}
        <article className="presentation">
          <div className="introduction">
            <h1>
              Chaque couleur <br />
              <span>raconte une histoire</span>
            </h1>
            <h2>Introduction</h2>
            <p>
              Je suis Alban Kevin, photographe passionné spécialisé dans les
              portraits et la photographie urbaine. Mon objectif est de capturer
              des moments authentiques et de révéler la beauté cachée du
              quotidien.
            </p>
            <Link to="/portfolio" className="button" aria-label="Voir les projets du portfolio">
              Voir mon travail
            </Link>
          </div>

          <img
            src="/images/index/portrait-artiste.webp"
            alt="Portrait de l’artiste"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="presentation__img"
          />
        </article>

        <ScrollingText />

        {/* Section réalisations */}
        <section className="realisation">
          <h2>Mon univers photographique captivant</h2>
          <div className="realisation-grid">
            <div className="realisation-box">
              <img src="/images/index/portrait-acceuil.webp" alt="portrait" />
              <div className="description">
                <h3>Portraits</h3>
                <HashLink
                  to="/portfolio#anchor-portrait"
                  smooth
                  aria-label="Voir les détails des portraits"
                >
                  VOIR EN DETAIL →
                </HashLink>
              </div>
            </div>

            <div className="realisation-box">
              <img src="/images/index/voyage-acceuil.webp" alt="voyage" />
              <div className="description">
                <h3>Photographie de voyage</h3>
                <HashLink
                  to="/portfolio#anchor-trip"
                  smooth
                  aria-label="Voir les détails des voyages"
                >
                  VOIR EN DETAIL →
                </HashLink>
              </div>
            </div>

            <div className="realisation-box">
              <img src="/images/index/mode-acceuil.webp" alt="mode" />
              <div className="description">
                <h3>Mode & Editorial</h3>
                <HashLink
                  to="/portfolio#anchor-editorial"
                  smooth
                  aria-label="Voir les détails de la mode"
                >
                  VOIR EN DETAIL →
                </HashLink>
              </div>
            </div>

            <div className="realisation-box">
              <img src="/images/index/reportage-acceuil.webp" alt="reportage" />
              <div className="description">
                <h3>Reportages / Evénements</h3>
                <HashLink
                  to="/portfolio#anchor-event"
                  smooth
                  aria-label="Voir les détails des reportages"
                >
                  VOIR EN DETAIL →
                </HashLink>
              </div>
            </div>
          </div>
        </section>

        {/* Slider */}
        <section className="overview-portfolio">
          <h2>Un Aperçu sur nos meilleures œuvres</h2>
          <div className="slider-container">
            <div
              className="slider"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <div key={index} className="slide">
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </div>

          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </section>

        {/* Vidéo */}
        <div className="presentation-video">
          <video
            ref={videoRef}
            id="video"
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster="/video/video-mariage-poster.jpg"
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/video/video-mariage.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de cette vidéo.
          </video>
        </div>

        {/* Collaborations */}
        <table className="collaboration-table">
          <caption>Collaborations</caption>
          <tbody>
            <tr>
              <td>📷 Nikon</td>
              <td>Ambassadeur officiel, test de nouveaux objectifs</td>
            </tr>
            <tr>
              <td>📸 Canon</td>
              <td>Campagne "Capture the Moment"</td>
            </tr>
            <tr>
              <td>🎞️ Fujifilm</td>
              <td>Création d’une série documentaire en argentique</td>
            </tr>
            <tr>
              <td>🏔️ The North Face</td>
              <td>Expéditions photo en haute montagne</td>
            </tr>
            <tr>
              <td>🚀 SpaceX</td>
              <td>Projet spécial : "La photographie au-delà de la Terre"</td>
            </tr>
          </tbody>
        </table>

        {/* Section contact */}
        <section className="talk-with-us">
          <h2>Créons quelque chose de grand !</h2>
          <p>
            Nous vous faisons passer de la réalité d'aujourd'hui au potentiel de
            demain
          </p>
          <Link to="/contact" className="button" aria-label="Aller à la page Contact">
            Nous parler de votre projet
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;
