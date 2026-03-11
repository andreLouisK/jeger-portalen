import React from 'react';

export const NavigationItem = ({ icon, text, active, onClick }) => (
  <div
    className={`nav-item flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </div>
);
