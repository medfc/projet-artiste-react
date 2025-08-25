import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookiesAccepted') === 'true';

    if (consentGiven) {
      document.body.classList.remove('block-all');
      preloadImagesLCP();
    } else {
      document.body.classList.add('block-all');
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    document.body.classList.remove('block-all');
    setIsVisible(false);
    preloadImagesLCP();
    window.dispatchEvent(new Event('consent-accepted'));
  };

  return (
    <>
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

// À adapter si tu veux déclencher des chargements différés
function preloadImagesLCP() {
  console.log('Images ou scripts différés peuvent être chargés ici.');
}
