import React from 'react';

function Navigation({ onPageChange, currentPage }) {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>
      <button onClick={() => onPageChange('home')} disabled={currentPage === 'home'}>Home</button>
      <button onClick={() => onPageChange('topics')} disabled={currentPage === 'topics'}>Topics</button>
      <button onClick={() => onPageChange('quizzes')} disabled={currentPage === 'quizzes'}>Quizzes</button>
      <button onClick={() => onPageChange('games')} disabled={currentPage === 'games'}>Games</button>
    </nav>
  );
}

export default Navigation;
