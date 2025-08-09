import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAutoPlayWhenVisible from "../hooks/useAutoPlayWhenVisible";
import portraitArtiste from "../assets/images/index/portrait-artiste.webp";
import portraitAccueil from "../assets/images/index/portrait-acceuil.webp";
import voyageAccueil from "../assets/images/index/voyage-acceuil.webp";
import modeAccueil from "../assets/images/index/mode-acceuil.webp";
import reportageAccueil from "../assets/images/index/reportage-acceuil.webp";
import portrait from "../assets/images/index/portrait.webp";
import mariage from "../assets/images/index/mariage.webp";
import voyage from "../assets/images/index/voyage.webp";
import paysageUrbain from "../assets/images/index/paysage-urbain.webp";
import mariage2 from "../assets/images/index/marriage-2.webp";
import shooting from "../assets/images/index/shooting.webp";
import videoPoster from "../assets/video/video-mariage-poster.jpg";
import videoFile from "../assets/video/video-mariage.mp4";
import ScrollingText from "../components/ScrollingText";
import useScrollToTopOnMount from "../hooks/useScrollToTopOnMount";
import "../assets/style.css";


function Home() {
  useScrollToTopOnMount();
  const images = [portrait, mariage, voyage, paysageUrbain, mariage2, shooting];
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  useAutoPlayWhenVisible(videoRef);
  const [isPlaying, setIsPlaying] = useState(false);

  // Défilement automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Masquer le bouton Play
    }
  };

  return (
    <div>
      <main>
        <article className="presentation">
          <div className="introduction">
            <h1>Chaque couleur <br /><span>raconte une histoire</span></h1>
            <h2>Introduction</h2>
            <p>
              Je suis Alban Kevin, photographe passionné spécialisé dans les portraits et la photographie urbaine. Mon objectif est de capturer des moments authentiques et de révéler la beauté cachée du quotidien.
            </p>
            <Link to="/portfolio" className="button" aria-label="Voir les projets du portfolio">
            Voir mon travail
            </Link>

          </div>
          <img src={portraitArtiste} alt="portrait de l'artiste" loading="eager" decoding="sync"/>


        </article>

        <ScrollingText />


        <section className="realisation"> 
          <h2>Mon univers photographique captivant</h2>
          <div className="realisation-grid">
            <div className="realisation-box">
              <img src={portraitAccueil} alt="portrait" />
              <div className="description">
                <h3>Portraits</h3>
                <HashLink to="/portfolio#anchor-portrait" smooth aria-label="Voir les détails des portraits"> VOIR EN DETAIL → </HashLink>
              </div>
            </div>
            <div className="realisation-box">
              <img src={voyageAccueil} alt="portrait" />
              <div className="description">
                <h3>Photographie de voyage</h3>
                <HashLink to="/portfolio#anchor-trip" smooth aria-label="Voir les détails des portraits"> VOIR EN DETAIL → </HashLink>

              </div>
            </div>
            <div className="realisation-box">
              <img src={modeAccueil} alt="portrait" />
              <div className="description">
                <h3>Mode & Editorial</h3>
                <HashLink to="/portfolio#anchor-editorial" smooth aria-label="Voir les détails des portraits"> VOIR EN DETAIL → </HashLink>
              </div>
            </div>
            <div className="realisation-box">
              <img src={reportageAccueil} alt="portrait" />
              <div className="description">
                <h3>Reportages / Evénements</h3>
                <HashLink to= "/portfolio#anchor-event" smooth arial-label="Voir les details des portraits"> VOIR EN DETAIL → </HashLink>
              </div>
            </div>
          </div>
        </section>

        <section className="overview-portfolio">
          <h2>Un Aperçu sur nos meilleures œuvres</h2>
          <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((img, index) => (
                <div key={index} className="slide">
                  <img src={img} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="dots">
            {images.map((_, index) => (
              <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => setCurrentIndex(index)}></span>
            ))}
          </div>
        </section>

        <div className="presentation-video">
          <video ref={videoRef} id="video" controls loading="lazy" poster={videoPoster} muted playsInline onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
            <source src={videoFile} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de cette vidéo.
          </video>
          {!isPlaying && <button className="play-button" onClick={handlePlay}></button>}
        </div>

        <table className="collaboration-table">
          <caption> Collaborations </caption>
          <tbody>
            <tr><td>📷 Nikon</td><td>Ambassadeur officiel, test de nouveaux objectifs</td></tr>
            <tr><td>📸 Canon</td><td>Campagne "Capture the Moment"</td></tr>
            <tr><td>🎞️ Fujifilm</td><td>Création d’une série documentaire en argentique</td></tr>
            <tr><td>🏔️ The North Face</td><td>Expéditions photo en haute montagne</td></tr>
            <tr><td>🚀 SpaceX</td><td>Projet spécial : "La photographie au-delà de la Terre"</td></tr>
          </tbody>
        </table>

        <section className="talk-with-us">
          <h2> Créons quelque chose de grand !</h2>
          <p> Nous vous faisons passer de la réalité d'aujourd'hui au potentiel de demain </p>
          <Link to="/contact" className="button" aria-label="Aller à la page Contact"> Nous parler de votre projet </Link>

        </section>
      </main>
    </div>
  );
}

export default Home;
