import React from 'react';
import { viltCategories } from '../data_viltdata';

export const AnimalCard = ({ animal, onClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg card-hover cursor-pointer" style={{ overflow: 'hidden' }} onClick={onClick}>
      <div className="relative">
        <img 
          src={animal.image} 
          alt={animal.name} 
          className="w-full h-48 object-cover pointer-events-none" 
          draggable="false"
        />
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full h-9 w-9 flex items-center justify-center shadow-sm">
          <span className="text-base" style={{color: '#22714D'}}>
            {animal.habitat_icon}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{animal.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{animal.info}</p>
        <div className="flex items-center text-xs text-gray-500 space-x-4">
          <span className="flex items-center">
            <span className="mr-1">📅</span>
            {animal.season}
          </span>
          <span className="flex items-center">
            <span className="mr-1">📍</span>
            {animal.location}
          </span>
        </div>
      </div>
    </div>
  );
};
