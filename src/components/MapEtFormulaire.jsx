import { useFormInput } from "../hooks/useFormInput";

function MapEtFormulaire() {
  const fullName = useFormInput("");
  const email = useFormInput("");
  const site = useFormInput("");
  const message = useFormInput("");

  return (
    <section className="map-form">
      <div className="map-container">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5365.0909551784835!2d7.349444265051269!3d47.75147302702019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b9a1bd0892d%3A0xea12a13c14e19065!2s16%20Rue%20de%20l'%C3%8Ele%20Napol%C3%A9on%2C%2068100%20Mulhouse!5e0!3m2!1sfr!2sfr!4v1741779724297!5m2!1sfr!2sfr"
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      <div className="form-container">
        <h2>Un projet en tête ?</h2>
        <p>
          Génial ! Nous sommes impatients d'en savoir plus et de commencer
          ensemble.
        </p>
        <form id="contactForm">
          <input
            type="text"
            id="fullName"
            placeholder="Votre Nom"
            required
            {...fullName}
          />
          <input
            type="email"
            id="email"
            placeholder="Votre email"
            required
            {...email}
          />
          <input
            type="text"
            id="site"
            placeholder="Votre site"
            required
            {...site}
          />
          <textarea
            id="message"
            placeholder="Comment puis-je vous aider ?"
            required
            {...message}
          />
          <button type="submit" className="button">Envoyer Le Message</button>
        </form>
      </div>
    </section>
  );
}

export default MapEtFormulaire;
