import React, { useState } from 'react';
import { TournamentProvider } from './context/TournamentContext';
import { AdminProvider } from './context/AdminContext';
import Router from './components/shared/Router';
import Home from './components/Home';
import DrawScreen from './components/DrawScreen';
import './components/Home.css'; // Global component styles
import './index.css';

// Legacy AppContent for backward compatibility with quick match mode
function AppContent() {
  const [view, setView] = useState('home');

  const navigateToDraw = () => setView('draw');
  const navigateToHome = () => setView('home');

  return (
    <div className="container">
      {view === 'home' && <Home onStartDraw={navigateToDraw} />}
      {view === 'draw' && <DrawScreen onBack={navigateToHome} />}
    </div>
  );
}

function App() {
  return (
    <AdminProvider>
      <TournamentProvider>
        <Router />
      </TournamentProvider>
    </AdminProvider>
  );
}

export default App;
