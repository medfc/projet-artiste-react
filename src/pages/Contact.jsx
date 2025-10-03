import { Helmet } from "react-helmet-async";
import "../assets/contact.css";
import MapEtFormulaire from "../components/MapEtFormulaire";
import ScrollingText from "../components/ScrollingText";
import useScrollToTopOnMount from "../hooks/useScrollToTopOnMount";



function Contact() {
  // Remonte en haut de la page au montage
  useScrollToTopOnMount();



  return (
    <main>

      <Helmet>
        <title>Contact - Photographe Alban Kevin</title>
        <meta
          name="description"
          content="Contactez Alban Kevin pour vos projets photo : portraits, mariages, voyages ou reportages. Studio situé à Mulhouse, France."
        />
      </Helmet>
      <div id="contact-banner" className="welcome-banner">
        <h2>Contact</h2>
      </div>
      {/* Infos de contact (adresse, email, téléphone) */}
      <section className="contact-info">
        <div className="contact-box">
          <div className="icon">📍</div>
          <h3>Studio</h3>
          <p>16 rue Ile de Napoleon</p>
          <a href="https://maps.app.goo.gl/FiJXDDm2mpJMCEaF9" target="_blank" rel="noopener noreferrer">
            OBTENIR L'ITINÉRAIRE →
          </a>
        </div>
        <div className="contact-box">
          <div className="icon">✉️</div>
          <h3>Adresse e-mail</h3>
          <p>medfc@yahoo.fr</p>
          <a href="mailto:medfc@yahoo.fr">ENVOYER UN MESSAGE →</a>
        </div>
        <div className="contact-box">
          <div className="icon">📞</div>
          <h3>Numéro de téléphone</h3>
          <p>+33 6 17 02 64 97</p>
          <a href="tel:+33617026497">APPELER À TOUT MOMENT →</a>
        </div>
      </section>
      {/* Carte + formulaire de contact */}
      <MapEtFormulaire />


      <ScrollingText />

    </main>
  );
}

export default Contact;
