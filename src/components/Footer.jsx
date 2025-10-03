import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Bloc newsletter + contact */}
        <div className="newsletter-contact">
          {/* Newsletter inscription */}
          <div className="newsletter">
            <h3>Nous suivre à travers nos œuvres et nos futurs projets</h3>
            <form action="#" method="post">
              <input
                type="email"
                id="email-newsletter"
                name="email"
                placeholder="Votre email ici"
                aria-label="Votre email"
                required
                autoComplete="email"
              />
              <button type="submit" className="arrow-button"> &#8599;</button>
            </form>
            <p>
              Rejoignez ma communauté et plongez dans mon univers visuel.
              Soyez informé(e) de mes nouvelles séries photographiques,
              expositions et inspirations.
            </p>
          </div>
          {/* Infos de contact */}
          <div className="contact">
            <h3>Contact</h3>
            <p>
              16 rue Ile de Napoleon <br />
              +33 6 17 02 64 97
            </p>
            <a href="mailto:medfc@yahoo.fr" aria-label="Envoyer un email">
              medfc@yahoo.fr
            </a>
          </div>
        </div>
        {/* Liens internes vers les pages du site */}
        <aside className="links">
          <h3>Liens</h3>
          <ul>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </aside>
      </div>

      <hr className="footer-line" />
      {/* Bas de page avec copyright et réseaux sociaux */}
      <div className="footer-bottom">
        <p>Copyright &copy; 2025 Alban Kevin</p>
        <div className="icone-footer-bottom">
          <a href="https://www.facebook.com" aria-label="Page Facebook">
            <img src="/images/index/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" aria-label="Page Instagram">
            <img src="/images/index/instagram.png" alt="Instagram" />
          </a>
          <a href="https://x.com/?mx=2" aria-label="Page Twitter">
            <img src="/images/index/twitter.png" alt="Twitter" />
          </a>
          <a href="https://dribbble.com" aria-label="Page Dribbble">
            <img src="/images/index/reseau-social.png" alt="Dribbble" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
