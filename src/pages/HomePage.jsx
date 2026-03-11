import React, { useEffect } from 'react';
import { AnimalCard } from '../components';
import { viltData, viltCategories } from '../data_viltdata';
import { useDragScroll } from '../hooks/useDragScroll';

export const HomePage = ({ 
  selectedCategory, 
  setSelectedCategory, 
  navigateToAnimalDetail
}) => {
  const { scrollRef, isDragging } = useDragScroll();

  // Scroll til toppen når komponenten lastes
  useEffect(() => {
    window.scrollTo(0, 0);
    // Scroll også hovedcontaineren
    const mainContainer = document.querySelector('.flex-1.overflow-auto');
    if (mainContainer) {
      mainContainer.scrollTop = 0;
    }
  }, []);
  // Filtrer dyr basert på valgt kategori
  const filteredAnimals = selectedCategory === 'alle' 
    ? viltData 
    : viltData.filter(animal => animal.category.toLowerCase() === selectedCategory);

  return (
    <div>
      <div className="forest-bg min-h-[400px] sm:min-h-[500px] lg:h-96 flex items-center justify-center text-white relative">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Din guide til<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>norsk jaktliv YOYOY
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed" style={{color: '#E8F5F0'}}>
            Utforsk den rike jakttradisjonen i Norge. Fra nybegynner til erfaren jeger – finn alt du trenger å vite om jakt på norsk vilt og våpen.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <button className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-30 transition-all text-sm sm:text-base">🎯 Bli en jeger</button>
            <button className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-30 transition-all text-sm sm:text-base">🌲 Jaktformer og Arter</button>
            <button className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-30 transition-all text-sm sm:text-base">🔫 Jaktvåpen og Utstyr</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 pb-20">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">🎯 Utforsk jaktbart vilt</h2>
              <p className="text-gray-600">Dykk ned i informasjonen om de ulike artene du kan jakte på i Norge</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {viltCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id 
                    ? 'text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                }`}
                style={selectedCategory === category.id ? {backgroundColor: '#22714D'} : {}}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden -mx-6 cursor-grab select-none"
        >
          <div className="flex gap-6 pt-4 pb-8 px-6" style={{ minWidth: "max-content" }}>
            {filteredAnimals.map((animal, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80"
                draggable="false"
                onClick={() => {
                  if (!isDragging) {  // 👈 bare naviger hvis det ikke var drag
                    navigateToAnimalDetail(animal);
                  }
                }}
              >
                <AnimalCard animal={animal} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
