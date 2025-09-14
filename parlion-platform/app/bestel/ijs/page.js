'use client';
import { useState } from 'react';
export default function IceCreamPage() {
  const [container, setContainer] = useState('bakje');
  const [scoops, setScoops] = useState(1);
  return (
    <div className="webapp-container">
      <header className="step-header"><h1>Stel je ijsje samen</h1><p>Stap 1: Verpakking & Aantal Bollen</p></header>
      <div className="choice-section">
        <h2>Kies je verpakking</h2>
        <div className="options-grid">
          <button className={`option-card ${container === 'bakje' ? 'selected' : ''}`} onClick={() => setContainer('bakje')}><h3>Bakje</h3></button>
          <button className={`option-card ${container === 'hoorntje' ? 'selected' : ''}`} onClick={() => setContainer('hoorntje')}><h3>Hoorntje</h3></button>
        </div>
      </div>
      <div className="choice-section">
        <h2>Kies je aantal bollen</h2>
        <div className="options-grid scoops">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button key={num} className={`option-card ${scoops === num ? 'selected' : ''}`} onClick={() => setScoops(num)}><h3>{num}</h3></button>
          ))}
        </div>
      </div>
      <div className="next-step-bar"><button className="cta-button">Volgende: Smaken Kiezen</button></div>
    </div>
  );
}
