import { useEffect, useState } from 'react';

export default function CookieConsent() {
  // État : afficher ou non la bannière de cookies
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifie si l’utilisateur a déjà accepté les cookies
    const consentGiven = localStorage.getItem('cookiesAccepted') === 'true';

    if (consentGiven) {
      document.body.classList.remove('block-all');
     
    } else {
      document.body.classList.add('block-all');
      setIsVisible(true);
    }
  }, []);

   // Quand l’utilisateur accepte
  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    document.body.classList.remove('block-all');
    setIsVisible(false);
    window.dispatchEvent(new Event('consent-accepted'));
  };

  return (
    <>
      {/* Affichage conditionnel de la bannière */}
      {isVisible && (
        <div className="cookie-banner">
          <p>
            Ce site utilise des cookies tiers pour améliorer votre expérience. Acceptez-vous les cookies ?
          </p>
          <button onClick={handleAccept}>J’ai compris</button>
        </div>
      )}
    </>
  );
}

