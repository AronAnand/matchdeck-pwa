import { useState, useEffect } from 'react';

// Route components (will be imported as needed)
import LandingPage from './LandingPage';
import AdminLogin from '../admin/AdminLogin';
import AdminDashboard from '../admin/AdminDashboard';
import TournamentDetail from '../admin/TournamentDetail';
import PlayerLogin from '../player/PlayerLogin';
import PlayerDrawScreen from '../player/PlayerDrawScreen';

/**
 * Get current route from hash
 * @returns {string} - Current route path
 */
function getHashRoute() {
  const hash = window.location.hash.slice(1); // Remove the '#'
  return hash || '/';
}

/**
 * Navigate to a route
 * @param {string} path - Path to navigate to
 */
export function navigate(path) {
  window.location.hash = path;
}

/**
 * Hash-based router component
 */
export default function Router() {
  const [route, setRoute] = useState(getHashRoute());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getHashRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Route matching
  if (route === '/' || route === '') {
    return <LandingPage />;
  }

  if (route === '/admin') {
    return <AdminLogin />;
  }

  if (route === '/admin/dashboard') {
    return <AdminDashboard />;
  }

  if (route.startsWith('/admin/tournament/')) {
    const tournamentId = route.split('/')[3];
    return <TournamentDetail tournamentId={tournamentId} />;
  }

  if (route === '/player') {
    return <PlayerLogin />;
  }

  if (route.startsWith('/player/draw/')) {
    const code = route.split('/')[3];
    return <PlayerDrawScreen code={code} />;
  }

  // 404 Not Found
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Go Home
      </button>
    </div>
  );
}
