import { Helmet } from "react-helmet-async";
import "../assets/apropos.css";
import MapEtFormulaire from "../components/MapEtFormulaire";
import ScrollingText from "../components/ScrollingText";
import useScrollToTopOnMount from "../hooks/useScrollToTopOnMount";



function Apropos() {
  // Fait remonter en haut de la page
  useScrollToTopOnMount();


  return (
    <main>
      
      <Helmet>
        <title>À propos - Photographe Alban Kevin</title>
        <meta
          name="description"
          content="Découvrez le parcours d'Alban Kevin, photographe professionnel spécialisé dans les portraits, mariages, voyages et reportages."
        />
      </Helmet>
      <div id="apropos-banner" className="welcome-banner">
        <h2>À propos</h2>
      </div>
      {/* Statistiques principales */}
      <div className="apropos-container">
        <div className="box">
          <h3>150+</h3>
          <h3>Séances Réalisées</h3>
          <p>Portraits, mariages, événements et shootings professionnels capturant l’essence de chaque instant.</p>
        </div>
        <div className="box">
          <h3>30K+</h3>
          <h3>Photos Capturées</h3>
          <p>Chaque cliché raconte une histoire unique, immortalisant des souvenirs inoubliables.</p>
        </div>
        <div className="box">
          <h3>98%</h3>
          <h3>De Clients Satisfaits</h3>
          <p>Un accompagnement personnalisé pour garantir des photos authentiques et émouvantes.</p>
        </div>
      </div>

      {/* Section chiffres clés */}
      <section className="key-figures">
        <h3>Chiffres Clés</h3>
        <div className="stats">
          <div><h4>100+</h4><p>Œuvres photographiques</p></div>
          <div><h4>20</h4><p>Expositions internationales</p></div>
          <div><h4>5</h4><p>Pays où les œuvres ont été exposées</p></div>
        </div>
      </section>
      {/* Section expositions et événements */}   
      <section className="expositions">
        <h3>Expositions & Événements</h3>
        <div className="event-list">
          <div className="event"><h4>Exposition Lumières Urbaines</h4><p>📍 Paris, France – Avril 2025</p></div>
          <div className="event"><h4>Festival de la Photographie Contemporaine</h4><p>📍 Berlin, Allemagne – Juin 2025</p></div>
          <div className="event"><h4>Rétrospective Photographique</h4><p>📍 New York, USA – Septembre 2025</p></div>
        </div>
      </section>
      {/* Carte + formulaire de contact */}
      <MapEtFormulaire />
      {/* Texte défilant en bas de page */}
      <ScrollingText />

     
    </main>
  );
}

export default Apropos;
