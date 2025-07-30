import "../assets/Apropos.css";
import MapEtFormulaire from "../components/MapEtFormulaire";
import ScrollingText from "../components/ScrollingText";
import useScrollToTopOnMount from "../hooks/useScrollToTopOnMount";






function Apropos() {
  useScrollToTopOnMount();


  return (
    <main>
      <div id="apropos-banner" className="welcome-banner">
        <h2>À propos</h2>
      </div>

      <div className="apropos-container">
        <div className="box">
          <h2>150+</h2>
          <h3>Séances Réalisées</h3>
          <p>Portraits, mariages, événements et shootings professionnels capturant l’essence de chaque instant.</p>
        </div>
        <div className="box">
          <h2>30K+</h2>
          <h3>Photos Capturées</h3>
          <p>Chaque cliché raconte une histoire unique, immortalisant des souvenirs inoubliables.</p>
        </div>
        <div className="box">
          <h2>98%</h2>
          <h3>Clients Satisfaits</h3>
          <p>Un accompagnement personnalisé pour garantir des photos authentiques et émouvantes.</p>
        </div>
      </div>

      <section className="key-figures">
        <h2>Chiffres Clés</h2>
        <div className="stats">
          <div><h3>100+</h3><p>Œuvres photographiques</p></div>
          <div><h3>20</h3><p>Expositions internationales</p></div>
          <div><h3>5</h3><p>Pays où les œuvres ont été exposées</p></div>
        </div>
      </section>

      <section className="expositions">
        <h2>Expositions & Événements</h2>
        <div className="event-list">
          <div className="event"><h3>Exposition Lumières Urbaines</h3><p>📍 Paris, France – Avril 2025</p></div>
          <div className="event"><h3>Festival de la Photographie Contemporaine</h3><p>📍 Berlin, Allemagne – Juin 2025</p></div>
          <div className="event"><h3>Rétrospective Photographique</h3><p>📍 New York, USA – Septembre 2025</p></div>
        </div>
      </section>
      <MapEtFormulaire />
      <ScrollingText />

     
    </main>
  );
}

export default Apropos;
