import "../assets/Contact.css";
import MapEtFormulaire from "../components/MapEtFormulaire";
import ScrollingText from "../components/ScrollingText";
import useScrollToTopOnMount from "../hooks/useScrollToTopOnMount";



function Contact() {
  useScrollToTopOnMount();



  return (
    <main>
      <div id="contact-banner" className="welcome-banner">
        <h2>Contact</h2>
      </div>

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

    <MapEtFormulaire />


    <ScrollingText />

    </main>
  );
}

export default Contact;
