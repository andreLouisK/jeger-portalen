import React, { useEffect } from 'react';

export const OtherPage = ({ page }) => {
  // Scroll til toppen når komponenten lastes
  useEffect(() => {
    window.scrollTo(0, 0);
    // Scroll også hovedcontaineren
    const mainContainer = document.querySelector('.flex-1.overflow-auto');
    if (mainContainer) {
      mainContainer.scrollTop = 0;
    }
  }, []);
  const getPageTitle = () => {
    switch (page) {
      case 'vilt':
        return 'Alt om jaktbare arter';
      case 'vapen':
        return 'Alt om jaktvåpen';
      case 'nyheter':
        return 'Jakt nyheter';
      case 'profil':
        return 'Min profil';
      case 'vapenskap':
        return 'Våpenskap';
      default:
        return 'Side';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 pb-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        {getPageTitle()}
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <p className="text-gray-600">Denne siden er under utvikling...</p>
      </div>
    </div>
  );
};
