import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Hent nåværende side fra URL
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/vilt') return 'vilt';
    if (path === '/vapen') return 'vapen';
    if (path === '/nyheter') return 'nyheter';
    if (path === '/profil') return 'profil';
    if (path === '/dagbok') return 'Dagbok';
    if (path === '/vapenskap') return 'vapenskap';
    if (path.startsWith('/detail/')) return 'detail';
    return 'home';
  };

  const page = getCurrentPage();

  const navigateToPage = (newPage) => {
    setSidebarOpen(false); // Lukk sidebar på mobile når man navigerer
    
    // Naviger til riktig URL basert på side
    switch (newPage) {
      case 'home':
        navigate('/');
        break;
      case 'vilt':
        navigate('/vilt');
        break;
      case 'vapen':
        navigate('/vapen');
        break;
      case 'nyheter':
        navigate('/nyheter');
        break;
      case 'profil':
        navigate('/profil');
        break;
      case 'Dagbok':
        navigate('/dagbok');
        break;
      case 'vapenskap':
        navigate('/vapenskap');
        break;
      default:
        navigate('/');
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return {
    page,
    sidebarOpen,
    setSidebarOpen,
    navigateToPage,
    toggleSidebar,
    closeSidebar
  };
};
