export default function HomePage() {
  return (
    <main>
      <div className="home-hero">
          <div className="bg"><video src="https://parlion.com/assets/vid/home-hero.mp4" autoPlay muted loop playsInline className="bg-vid"></video></div>
          <div className="wrapper"><h1><span>P</span><span>A</span><span>R</span><span>L</span><span>I</span><span>O</span><span>N</span></h1><p>The Ice Cream Master</p></div>
      </div>
      <div className="products-section">
          <h2>Ontdek Onze Wereld</h2>
          <div className="products-grid">
              <div className="product-card"><div className="color-block color-sky"></div><h3>Ambachtelijk IJs</h3><p>Ontdek een symfonie van smaken, met passie bereid.</p></div>
              <div className="product-card"><div className="color-block color-sun"></div><h3>Luxe Wafels</h3><p>Een perfecte balans tussen krokant, warm en heerlijk.</p></div>
              <div className="product-card"><div className="color-block color-nature"></div><h3>Verfijnde Dranken</h3><p>Van specialty coffee tot verfrissende creaties.</p></div>
          </div>
      </div>
      <div className="philosophy-section">
          <div className="philosophy-image"><div className="color-block color-summer"></div></div>
          <div className="philosophy-text"><h2>Puurheid in Elke Hap</h2><p>Bij Parlion geloven we dat uitzonderlijke smaak begint bij de bron. We reizen de wereld rond op zoek naar de puurste ingrediënten. Elke creatie is een ode aan ambacht en kwaliteit.</p><a href="/bestel" className="cta-button">Bestel Nu Online</a></div>
      </div>
      <div className="contact-section">
          <h2>Waar Vind Je Ons?</h2>
          <p>Kom langs in het hart van Antwerpen en ervaar Parlion zelf. We kijken ernaar uit je te verwelkomen.</p>
          <address className="address">Grote Markt 1, 2000 Antwerpen, België</address>
          <a href="https://www.google.com/maps/place/Grote+Markt+1,+2000+Antwerpen" target="_blank" rel="noopener noreferrer" className="map-button">Open in Google Maps</a>
      </div>
      <footer className="site-footer">
          <div className="footer-socials">
              <a href="https://www.instagram.com/parlion_" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/Par1ion" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.tiktok.com/@Parlion_" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
          <div className="footer-copy"><p>© {new Date().getFullYear()} PARLION. All rights reserved.</p><p><a href="/terms-and-conditions">Algemene Voorwaarden</a> | <a href="/privacy-policy">Privacybeleid</a></a ></p></div>
      </footer>
    </main>
  );

}
