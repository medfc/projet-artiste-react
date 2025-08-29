import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookiesAccepted') === 'true';

    if (consentGiven) {
      document.body.classList.remove('block-all');
     
    } else {
      document.body.classList.add('block-all');
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    document.body.classList.remove('block-all');
    setIsVisible(false);
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

