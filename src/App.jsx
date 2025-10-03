import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import CookieConsent from './components/CookieConsent';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;