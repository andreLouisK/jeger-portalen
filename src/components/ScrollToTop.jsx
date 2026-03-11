import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Scroll til toppen når pathname endres - både window og hovedcontainer
    window.scrollTo(0, 0);
    
    // Scroll også hovedcontaineren (den som har overflow-auto)
    const mainContainer = document.querySelector('.flex-1.overflow-auto');
    if (mainContainer) {
      mainContainer.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
