import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailTabs, MediaGallery, SoundPlayer } from '../components';
import { viltData as animals } from '../data_viltdata';

export const DetailPage = ({ 
  expandedTexts,
  toggleTextExpansion 
}) => {
  const navigate = useNavigate();
  const { animalId } = useParams();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [detailTab, setDetailTab] = useState('Om Storfugl');

  // Last inn dyr basert på URL parameter
  useEffect(() => {
    console.log('DetailPage useEffect triggered, animalId:', animalId);
    if (animalId) {
      const animal = animals.find(a => a.id === animalId);
      console.log('Found animal:', animal);
      if (animal) {
        setSelectedAnimal(animal);
        // Sett første tilgjengelige tab
        const availableTabs = animal.details ? Object.keys(animal.details) : ['Om Storfugl', 'Jaktformer', 'Utnyttelse', 'Bestand'];
        setDetailTab(availableTabs[0]);
        console.log('Set selectedAnimal and detailTab');
        // Scroll til toppen når dyre-detaljer lastes
        window.scrollTo(0, 0);
        // Scroll også hovedcontaineren
        const mainContainer = document.querySelector('.flex-1.overflow-auto');
        if (mainContainer) {
          mainContainer.scrollTop = 0;
        }
      }
    }
  }, [animalId]);

  // Hent tilgjengelige tabs for valgt dyr
  const getAvailableTabs = (animal) => {
    if (!animal || !animal.details) return ['Om Storfugl', 'Jaktformer', 'Utnyttelse', 'Bestand'];
    return Object.keys(animal.details);
  };
  
  if (!selectedAnimal) {
    return (
      <div className="p-8 text-center">
        <p>Laster dyreinformasjon...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative overflow-hidden" style={{background: 'linear-gradient(to right, #1A5A3E, #22714D)'}}>
        <img src={selectedAnimal.image} alt={selectedAnimal.name} className="absolute inset-0 w-full h-full object-cover opacity-100" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(34, 113, 77, 0.85), rgba(34, 113, 77, 0.85))"
          }}
        ></div>
        <div className="relative flex flex-col justify-start text-white p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto w-full space-y-4 sm:space-y-6">
            <button onClick={() => navigate(-1)} className="text-white text-sm sm:text-base" style={{color: 'white'}} onMouseEnter={(e) => e.target.style.color = '#D1EBE0'} onMouseLeave={(e) => e.target.style.color = 'white'}>← Tilbake</button>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{selectedAnimal.name}</h1>
            <p className="text-sm sm:text-base lg:text-lg italic" style={{color: '#D1EBE0'}}>{selectedAnimal.latin}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div>
                <span className="block text-xs sm:text-sm" style={{color: '#D1EBE0'}}>Orden:</span>
                <span className="font-semibold text-xs sm:text-sm break-words">{selectedAnimal.family}</span>
              </div>
              <div>
                <span className="block text-xs sm:text-sm" style={{color: '#D1EBE0'}}>Habitat:</span>
                <span className="font-semibold text-xs sm:text-sm break-words">{selectedAnimal.habitat}</span>
              </div>
              <div>
                <span className="block text-xs sm:text-sm" style={{color: '#D1EBE0'}}>Vekt:</span>
                <span className="font-semibold text-xs sm:text-sm break-words">{selectedAnimal.weight}</span>
              </div>
              <div>
                <span className="block text-xs sm:text-sm" style={{color: '#D1EBE0'}}>Sesong:</span>
                <span className="font-semibold text-xs sm:text-sm break-words">{selectedAnimal.season}</span>
              </div>
            </div>
            <div>
              <SoundPlayer sounds={selectedAnimal.sounds} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 pb-20">
        <DetailTabs 
          active={detailTab} 
          setActive={setDetailTab} 
          tabs={getAvailableTabs(selectedAnimal)}
        />
        <div className="bg-white rounded-xl shadow-lg p-6 -mx-4">
          {selectedAnimal.details && selectedAnimal.details[detailTab] ? (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{detailTab}</h3>
              {Object.entries(selectedAnimal.details[detailTab]).map(([key, value], index) => {
                console.log(`Rendering section: ${key}`, value);
                return (
                <div key={key} className={`relative ${index > 0 ? 'pt-8 mt-8 border-t border-gray-200' : ''}`}>
                  <h4 className="text-lg font-semibold mb-4 capitalize relative" style={{color: '#1A5A3E'}}>
                    <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-6 rounded-full" style={{background: 'linear-gradient(to bottom, #22714D, #38A571)'}}></span>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  
                  {/* Check if value is new structure with text and media */}
                  {typeof value === 'object' && value.text ? (
                    <div className="relative">
                      {/* Media content - only show on larger screens, floated to the right */}
                      {value.media && value.media.length > 0 && (
                        <div className="hidden lg:block float-right lg:ml-6 mb-4 lg:w-96">
                          <MediaGallery 
                            media={value.media}
                          />
                        </div>
                      )}
                      
                      {/* Text content - flows around the media on larger screens */}
                      <div className="text-gray-700 leading-relaxed">
                        {/* Mobile version with text truncation */}
                        <div 
                          className="block lg:hidden"
                          style={{
                            maxHeight: expandedTexts[`${selectedAnimal?.name}-${key}`] ? 'none' : '200px',
                            overflow: 'hidden',
                            position: 'relative'
                          }}
                        >
                          {Array.isArray(value.text) ? (
                            value.text.map((paragraph, index) => (
                              <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
                            ))
                          ) : (
                            <p>{value.text}</p>
                          )}
                          
                          {/* Gradient overlay for collapsed text on mobile */}
                          {!expandedTexts[`${selectedAnimal?.name}-${key}`] && (
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                          )}
                        </div>
                        
                        {/* Desktop version - full text always visible */}
                        <div className="hidden lg:block">
                          {Array.isArray(value.text) ? (
                            value.text.map((paragraph, index) => (
                              <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
                            ))
                          ) : (
                            <p>{value.text}</p>
                          )}
                        </div>
                        
                        {/* Read more/less button - only show on mobile */}
                        <button
                          onClick={() => toggleTextExpansion(`${selectedAnimal?.name}-${key}`)}
                          className="lg:hidden mt-2 font-medium text-sm flex items-center" style={{color: '#22714D'}} onMouseEnter={(e) => e.target.style.color = '#1A5A3E'} onMouseLeave={(e) => e.target.style.color = '#22714D'}
                        >
                          {expandedTexts[`${selectedAnimal?.name}-${key}`] ? (
                            <>
                              <span>Les mindre</span>
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            </>
                          ) : (
                            <>
                              <span>Les mer</span>
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                      
                      {/* Media content for mobile - show after text */}
                      {value.media && value.media.length > 0 && (
                        <div className="block lg:hidden w-full mb-4 mt-6">
                          <MediaGallery 
                            media={value.media}
                          />
                        </div>
                      )}
                      
                      {/* Clear float on larger screens */}
                      <div className="hidden lg:block clear-both"></div>
                    </div>
                  ) : (
                    /* Fallback for old string format */
                    <p className="text-gray-700 leading-relaxed">{value}</p>
                  )}
                </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Informasjon for denne kategorien er ikke tilgjengelig.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
