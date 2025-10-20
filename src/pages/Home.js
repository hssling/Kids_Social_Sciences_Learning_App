import React from 'react';

function Home() {
  return (
    <div>
      <h2>Welcome to Kids Social Sciences Learning App</h2>
      <p>Learn exciting facts about the world, history, rules, and money!</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#3498db', color: 'white', padding: '20px', borderRadius: '10px' }}>
          <h3>🏰 History</h3>
          <p>Discover stories from the past!</p>
        </div>
        <div style={{ backgroundColor: '#e74c3c', color: 'white', padding: '20px', borderRadius: '10px' }}>
          <h3>🌍 Geography</h3>
          <p>Explore amazing places!</p>
        </div>
        <div style={{ backgroundColor: '#f39c12', color: 'white', padding: '20px', borderRadius: '10px' }}>
          <h3>⚖️ Civics</h3>
          <p>Learn about laws and leaders!</p>
        </div>
        <div style={{ backgroundColor: '#2ecc71', color: 'white', padding: '20px', borderRadius: '10px' }}>
          <h3>💰 Economics</h3>
          <p>Fun with money and trading!</p>
        </div>
      </div>
      <p>Navigate using the buttons above to start learning!</p>
    </div>
  );
}

export default Home;
