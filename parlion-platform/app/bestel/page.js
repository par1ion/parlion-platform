export default function OrderPage() {
  return (
    <div className="webapp-container">
      <header className="webapp-header"><h1>Maak je keuze</h1></header>
      <div className="category-grid">
        <a href="/bestel/ijs" className="category-card"><div className="card-background" style={{backgroundColor: '#87CEEB'}}></div><h2>IJs</h2></a>
        <a href="/bestel/wafels" className="category-card"><div className="card-background" style={{backgroundColor: '#FFD700'}}></div><h2>Wafels</h2></a>
        <a href="/bestel/dranken" className="category-card"><div className="card-background" style={{backgroundColor: '#98FB98'}}></div><h2>Dranken</h2></a>
      </div>
    </div>
  );
}
