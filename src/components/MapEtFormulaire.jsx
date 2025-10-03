import { useEffect, useState } from "react"; 
import { useFormInput } from "../hooks/useFormInput";

function MapEtFormulaire() {
  // Champs du hook personnalisé
  const fullName = useFormInput("");
  const email = useFormInput("");
  const site = useFormInput("");
  const message = useFormInput("");

  // État pour savoir si les cookies ont été acceptés
  const [allowed, setAllowed] = useState(
    localStorage.getItem("cookiesAccepted") === "true"
  );

  useEffect(() => {
    // Si acceptation, Autoriser de la carte
    const onConsent = () => setAllowed(true);
    window.addEventListener("consent-accepted", onConsent);

  
    const onStorage = (e) => {
      if (e.key === "cookiesAccepted" && e.newValue === "true") setAllowed(true);
    };
    window.addEventListener("storage", onStorage);
    // Nettoyage des listeners au démontage
    return () => {
      window.removeEventListener("consent-accepted", onConsent);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <section className="map-form">
      {/* Bloc carte Google Maps */}
      <div className="map-container">
        {allowed ? (
        
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
        ) : (
          
          <div
            className="map-placeholder"
            style={{ border: "1px solid #ddd", padding: 16, textAlign: "center", borderRadius: 10 }}
          >
            <p>La carte Google Maps sera affichée après acceptation des cookies.</p>
            <a
              href="https://maps.google.com/?q=16+Rue+de+l%27%C3%8Ele+Napol%C3%A9on,+68100+Mulhouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouvrir l’itinéraire dans Google Maps
            </a>
          </div>
        )}
      </div>
      {/* Bloc formulaire de contact */}
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
            minLength={2}
            maxLength={50}
            pattern="^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$"
            title="Lettres seulement (accents OK), espaces/tirets/apostrophes autorisés."
            {...fullName}
          />
          <input
            type="email"
            id="email"
            placeholder="Votre email"
            required
            title="Entrez une adresse e-mail valide."
            {...email}
          />
          <input
            type="url"
            id="site"
            placeholder="Votre site (optionnel)"
            pattern="^https?://.+"
            title="Si renseigné, l'adresse doit commencer par http:// ou https://"
            {...site}
          />
          <textarea
            id="message"
            placeholder="Comment puis-je vous aider ?"
            required
            minLength={10}
            maxLength={1000}
            title="Votre message doit contenir entre 10 et 1000 caractères."
            {...message}
          />
          <button type="submit" className="button">
            Envoyer Le Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default MapEtFormulaire;
