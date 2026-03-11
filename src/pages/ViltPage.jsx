import React, { useEffect } from 'react';
import { MediaGallery, AnimalCard } from '../components';
import { viltData, viltCategories } from '../data_viltdata';
import { useDragScroll } from '../hooks/useDragScroll';

export const ViltPage = ({ 
  expandedTexts,
  toggleTextExpansion,
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
      {/* Hero Section - lik HomePage */}
      <div 
        className="min-h-[400px] sm:min-h-[500px] lg:h-96 flex items-center justify-center text-white relative"
        style={{
          background: `linear-gradient(rgba(34, 113, 77, 0.85), rgba(34, 113, 77, 0.85)), url('/media/images/elg-1.jpg') center/cover`
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Alt om jaktbare arter<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>i Norge
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed" style={{color: '#E8F5F0'}}>
            Utforsk den rike mangfoldet av jaktbare arter i Norge. Fra storfugl til hjort – lær om habitat, jaktformer og bestand.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <button className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-30 transition-all text-sm sm:text-base">🦌 Storvilt</button>
            <button className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-30 transition-all text-sm sm:text-base">🐦 Småvilt</button>
            <button className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-30 transition-all text-sm sm:text-base">🌲 Fuglejakt</button>
          </div>
        </div>
      </div>

      {/* Innføringssection - lik DetailPage struktur */}
      <div className="max-w-7xl mx-auto p-6 pb-6">
        <div className="bg-white rounded-xl shadow-lg p-6 -mx-4">
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Om jaktbare arter i Norge</h3>
            
            <div className="relative">
              <h4 className="text-lg font-semibold mb-4 capitalize relative" style={{color: '#1A5A3E'}}>
                <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-6 rounded-full" style={{background: 'linear-gradient(to bottom, #22714D, #38A571)'}}></span>
                Norsk jaktliv og arter
              </h4>
              
              <div className="relative">
                {/* Media content - only show on larger screens, floated to the right */}
                <div className="hidden lg:block float-right lg:ml-6 mb-4 lg:w-96">
                  <MediaGallery 
                    media={[
                      {
                        type: 'image',
                        url: '/media/images/elg-1.jpg',
                        alt: 'Elg i norsk skog',
                        caption: 'Elg er en av de største jaktbare artene i Norge'
                      },
                      {
                        type: 'image', 
                        url: '/media/images/hjort-1.jpg',
                        alt: 'Hjort i skogen',
                        caption: 'Hjort er en populær jaktart med lange jakttider'
                      }
                    ]}
                  />
                </div>
                
                {/* Text content - flows around the media on larger screens */}
                <div className="text-gray-700 leading-relaxed">
                  {/* Mobile version with text truncation */}
                  <div 
                    className="block lg:hidden"
                    style={{
                      maxHeight: expandedTexts['vilt-norsk-jaktliv'] ? 'none' : '200px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <p className="mb-4">
                      Norge har et rikt og mangfoldig jaktliv med over 20 jaktbare arter. Fra de majestetiske hjortene i skogen til de små fuglene i marken, hver art har sin unike plass i det norske økosystemet og jakttradisjonen.
                    </p>
                    <p className="mb-4">
                      Jakten i Norge er regulert gjennom lover og forskrifter som sikrer bærekraftig forvaltning av viltbestanden. Alle jaktbare arter har spesifikke jakttider, kvoter og metoder som må følges for å opprettholde en sunn bestand.
                    </p>
                    <p className="mb-4">
                      Som jeger er det viktig å kjenne til hver arts habitat, atferd og jakttider. Dette gir deg ikke bare bedre jaktsuksess, men også en dypere forståelse for naturen og din rolle som bærekraftig forvalter av viltbestanden.
                    </p>
                    
                    {/* Gradient overlay for collapsed text on mobile */}
                    {!expandedTexts['vilt-norsk-jaktliv'] && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                  </div>
                  
                  {/* Desktop version - full text always visible */}
                  <div className="hidden lg:block">
                    <p className="mb-4">
                      Norge har et rikt og mangfoldig jaktliv med over 20 jaktbare arter. Fra de majestetiske hjortene i skogen til de små fuglene i marken, hver art har sin unike plass i det norske økosystemet og jakttradisjonen.
                    </p>
                    <p className="mb-4">
                      Jakten i Norge er regulert gjennom lover og forskrifter som sikrer bærekraftig forvaltning av viltbestanden. Alle jaktbare arter har spesifikke jakttider, kvoter og metoder som må følges for å opprettholde en sunn bestand.
                    </p>
                    <p className="mb-4">
                      Som jeger er det viktig å kjenne til hver arts habitat, atferd og jakttider. Dette gir deg ikke bare bedre jaktsuksess, men også en dypere forståelse for naturen og din rolle som bærekraftig forvalter av viltbestanden.
                    </p>
                  </div>
                  
                  {/* Read more/less button - only show on mobile */}
                  <button
                    onClick={() => toggleTextExpansion('vilt-norsk-jaktliv')}
                    className="lg:hidden mt-2 font-medium text-sm flex items-center" style={{color: '#22714D'}} onMouseEnter={(e) => e.target.style.color = '#1A5A3E'} onMouseLeave={(e) => e.target.style.color = '#22714D'}
                  >
                    {expandedTexts['vilt-norsk-jaktliv'] ? (
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
                <div className="block lg:hidden w-full mb-4 mt-6">
                  <MediaGallery 
                    media={[
                      {
                        type: 'image',
                        url: '/media/images/elg-1.jpg',
                        alt: 'Elg i norsk skog',
                        caption: 'Elg er en av de største jaktbare artene i Norge'
                      },
                      {
                        type: 'image', 
                        url: '/media/images/hjort-1.jpg',
                        alt: 'Hjort i skogen',
                        caption: 'Hjort er en populær jaktart med lange jakttider'
                      }
                    ]}
                  />
                </div>
                
                {/* Clear float on larger screens */}
                <div className="hidden lg:block clear-both"></div>
              </div>
            </div>

            <div className="relative pt-8 mt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold mb-4 capitalize relative" style={{color: '#1A5A3E'}}>
                <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-6 rounded-full" style={{background: 'linear-gradient(to bottom, #22714D, #38A571)'}}></span>
                Kategorier av jaktbare arter
              </h4>
              
              <div className="relative">
                {/* Media content - only show on larger screens, floated to the right */}
                <div className="hidden lg:block float-right lg:ml-6 mb-4 lg:w-96">
                  <MediaGallery 
                    media={[
                      {
                        type: 'image',
                        url: '/media/images/storfugl-1.jpg',
                        alt: 'Storfugl i skogen',
                        caption: 'Storfugl er en populær småvilt-art for jakt'
                      },
                      {
                        type: 'video',
                        url: '/media/videos/storfugl-video.mp4',
                        thumbnail: '/media/images/storfugl-2.jpg',
                        alt: 'Storfugl i naturlig habitat',
                        caption: 'Video av storfugl i sitt naturlige habitat',
                        duration: '0:30'
                      }
                    ]}
                  />
                </div>
                
                {/* Text content - flows around the media on larger screens */}
                <div className="text-gray-700 leading-relaxed">
                  {/* Mobile version with text truncation */}
                  <div 
                    className="block lg:hidden"
                    style={{
                      maxHeight: expandedTexts['vilt-kategorier'] ? 'none' : '200px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <p className="mb-4">
                      Jaktbare arter i Norge deles inn i flere kategorier basert på størrelse, habitat og jakttradisjoner:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li><strong>Storvilt:</strong> Hjort, elg, rådyr og andre store pattedyr som krever spesiell lisens og utstyr</li>
                      <li><strong>Småvilt:</strong> Rådyr, hare, rev og andre mindre pattedyr med mer tilgjengelige jakttider</li>
                      <li><strong>Fuglejakt:</strong> Storfugl, andefugl, vadefugl og andre fuglearter med sesongbaserte jakttider</li>
                      <li><strong>Rovdyr:</strong> Ulv, bjørn, gaupe og andre rovpattedyr med spesielle forvaltningsregler</li>
                    </ul>
                    <p className="mb-4">
                      Hver kategori har sine egne regler, jakttider og krav til utstyr og kompetanse. Som jeger må du være kjent med disse forskjellene for å jakte lovlig og etisk.
                    </p>
                    
                    {/* Gradient overlay for collapsed text on mobile */}
                    {!expandedTexts['vilt-kategorier'] && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                  </div>
                  
                  {/* Desktop version - full text always visible */}
                  <div className="hidden lg:block">
                    <p className="mb-4">
                      Jaktbare arter i Norge deles inn i flere kategorier basert på størrelse, habitat og jakttradisjoner:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li><strong>Storvilt:</strong> Hjort, elg, rådyr og andre store pattedyr som krever spesiell lisens og utstyr</li>
                      <li><strong>Småvilt:</strong> Rådyr, hare, rev og andre mindre pattedyr med mer tilgjengelige jakttider</li>
                      <li><strong>Fuglejakt:</strong> Storfugl, andefugl, vadefugl og andre fuglearter med sesongbaserte jakttider</li>
                      <li><strong>Rovdyr:</strong> Ulv, bjørn, gaupe og andre rovpattedyr med spesielle forvaltningsregler</li>
                    </ul>
                    <p className="mb-4">
                      Hver kategori har sine egne regler, jakttider og krav til utstyr og kompetanse. Som jeger må du være kjent med disse forskjellene for å jakte lovlig og etisk.
                    </p>
                  </div>
                  
                  {/* Read more/less button - only show on mobile */}
                  <button
                    onClick={() => toggleTextExpansion('vilt-kategorier')}
                    className="lg:hidden mt-2 font-medium text-sm flex items-center" style={{color: '#22714D'}} onMouseEnter={(e) => e.target.style.color = '#1A5A3E'} onMouseLeave={(e) => e.target.style.color = '#22714D'}
                  >
                    {expandedTexts['vilt-kategorier'] ? (
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
                <div className="block lg:hidden w-full mb-4 mt-6">
                  <MediaGallery 
                    media={[
                      {
                        type: 'image',
                        url: '/media/images/storfugl-1.jpg',
                        alt: 'Storfugl i skogen',
                        caption: 'Storfugl er en populær småvilt-art for jakt'
                      },
                      {
                        type: 'video',
                        url: '/media/videos/storfugl-video.mp4',
                        thumbnail: '/media/images/storfugl-2.jpg',
                        alt: 'Storfugl i naturlig habitat',
                        caption: 'Video av storfugl i sitt naturlige habitat',
                        duration: '0:30'
                      }
                    ]}
                  />
                </div>
                
                {/* Clear float on larger screens */}
                <div className="hidden lg:block clear-both"></div>
              </div>
            </div>

            <div className="relative pt-8 mt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold mb-4 capitalize relative" style={{color: '#1A5A3E'}}>
                <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-6 rounded-full" style={{background: 'linear-gradient(to bottom, #22714D, #38A571)'}}></span>
                Bærekraftig jaktforvaltning
              </h4>
              
              <div className="relative">
                {/* Media content - only show on larger screens, floated to the right */}
                <div className="hidden lg:block float-right lg:ml-6 mb-4 lg:w-96">
                  <MediaGallery 
                    media={[
                      {
                        type: 'image',
                        url: '/media/images/ulv-1.jpg',
                        alt: 'Ulv i norsk natur',
                        caption: 'Rovdyr som ulv krever spesielle forvaltningsregler'
                      },
                      {
                        type: 'video',
                        url: '/media/videos/ulv-video.mp4',
                        thumbnail: '/media/images/ulv-1.jpg',
                        alt: 'Ulv i naturlig habitat',
                        caption: 'Video av ulv i sitt naturlige habitat',
                        duration: '0:45'
                      }
                    ]}
                  />
                </div>
                
                {/* Text content - flows around the media on larger screens */}
                <div className="text-gray-700 leading-relaxed">
                  {/* Mobile version with text truncation */}
                  <div 
                    className="block lg:hidden"
                    style={{
                      maxHeight: expandedTexts['vilt-baerekraftig'] ? 'none' : '200px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <p className="mb-4">
                      Bærekraftig jaktforvaltning er grunnlaget for all jakt i Norge. Dette innebærer å jakte på en måte som sikrer at viltbestanden forblir sunn og stabil for fremtidige generasjoner.
                    </p>
                    <p className="mb-4">
                      Viktige prinsipper inkluderer å respektere jakttider, følge kvoter, bruke riktig utstyr og teknikk, og alltid prioritere dyrevelferd. Som jeger har du et ansvar for å opprettholde disse standardene.
                    </p>
                    <p className="mb-4">
                      Gjennom denne portalen kan du lære mer om hver enkelt art, deres habitat, atferd og de beste jakttidene. Dette gir deg kunnskapen du trenger for å jakte ansvarlig og bærekraftig.
                    </p>
                    
                    {/* Gradient overlay for collapsed text on mobile */}
                    {!expandedTexts['vilt-baerekraftig'] && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                  </div>
                  
                  {/* Desktop version - full text always visible */}
                  <div className="hidden lg:block">
                    <p className="mb-4">
                      Bærekraftig jaktforvaltning er grunnlaget for all jakt i Norge. Dette innebærer å jakte på en måte som sikrer at viltbestanden forblir sunn og stabil for fremtidige generasjoner.
                    </p>
                    <p className="mb-4">
                      Viktige prinsipper inkluderer å respektere jakttider, følge kvoter, bruke riktig utstyr og teknikk, og alltid prioritere dyrevelferd. Som jeger har du et ansvar for å opprettholde disse standardene.
                    </p>
                    <p className="mb-4">
                      Gjennom denne portalen kan du lære mer om hver enkelt art, deres habitat, atferd og de beste jakttidene. Dette gir deg kunnskapen du trenger for å jakte ansvarlig og bærekraftig.
                    </p>
                  </div>
                  
                  {/* Read more/less button - only show on mobile */}
                  <button
                    onClick={() => toggleTextExpansion('vilt-baerekraftig')}
                    className="lg:hidden mt-2 font-medium text-sm flex items-center" style={{color: '#22714D'}} onMouseEnter={(e) => e.target.style.color = '#1A5A3E'} onMouseLeave={(e) => e.target.style.color = '#22714D'}
                  >
                    {expandedTexts['vilt-baerekraftig'] ? (
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
                <div className="block lg:hidden w-full mb-4 mt-6">
                  <MediaGallery 
                    media={[
                      {
                        type: 'image',
                        url: '/media/images/ulv-1.jpg',
                        alt: 'Ulv i norsk natur',
                        caption: 'Rovdyr som ulv krever spesielle forvaltningsregler'
                      },
                      {
                        type: 'video',
                        url: '/media/videos/ulv-video.mp4',
                        thumbnail: '/media/images/ulv-1.jpg',
                        alt: 'Ulv i naturlig habitat',
                        caption: 'Video av ulv i sitt naturlige habitat',
                        duration: '0:45'
                      }
                    ]}
                  />
                </div>
                
                {/* Clear float on larger screens */}
                <div className="hidden lg:block clear-both"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Utforsk jaktbart vilt seksjon - fra HomePage */}
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
