import Image from 'next/image';
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
          <div className="product-card">
            <div style={{width: '100%', height: '230px', backgroundColor: '#87CEEB', borderRadius: '10px', marginBottom: '20px'}}></div>
            <h3>Ambachtelijk IJs</h3>
          </div>
          <div className="product-card">
            <div style={{width: '100%', height: '230px', backgroundColor: '#FFD700', borderRadius: '10px', marginBottom: '20px'}}></div>
            <h3>Luxe Wafels</h3>
          </div>
          <div className="product-card">
            <div style={{width: '100%', height: '230px', backgroundColor: '#98FB98', borderRadius: '10px', marginBottom: '20px'}}></div>
            <h3>Verfijnde Dranken</h3>
          </div>
        </div>
      </div>
      <div className="philosophy-section">
        <div className="philosophy-image">
          <div style={{width: '100%', height: '100%', minHeight: '400px', backgroundColor: '#FF6B6B', borderRadius: '15px'}}></div>
        </div>
        <div className="philosophy-text">
          <h2>Puurheid in Elke Hap</h2>
          <a href="/bestel" className="cta-button">Bestel Nu Online</a>
        </div>
      </div>
      <div className="contact-section">{/*... Contact Info ...*/}</div>
      <footer className="site-footer">{/*... Footer Info ...*/}</footer>
    </main>
  );
}
