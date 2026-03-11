import React, { useRef, useEffect } from 'react';

export const DetailTabs = ({ active, setActive, tabs, variant = 'default' }) => {
  const scrollContainerRef = useRef(null);
  const activeButtonRef = useRef(null);

  const baseClasses = "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0";
  const activeClasses = variant === 'filter' 
    ? 'text-white' 
    : 'text-white';
  const inactiveClasses = variant === 'filter'
    ? 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
    : 'bg-white text-gray-600 hover:bg-gray-50';

  // Scroll til aktiv knapp når active endres
  useEffect(() => {
    if (activeButtonRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const button = activeButtonRef.current;
      
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      
      // Sjekk om knappen er helt synlig
      const isFullyVisible = 
        buttonRect.left >= containerRect.left && 
        buttonRect.right <= containerRect.right;
      
      if (!isFullyVisible) {
        // Beregn hvor mye vi må scrolle
        const scrollLeft = container.scrollLeft;
        const buttonOffsetLeft = button.offsetLeft;
        const buttonWidth = button.offsetWidth;
        const containerWidth = container.offsetWidth;
        
        let targetScrollLeft;
        
        if (buttonRect.left < containerRect.left) {
          // Knappen er til venstre, scroll til venstre
          targetScrollLeft = buttonOffsetLeft - 20; // 20px margin
        } else if (buttonRect.right > containerRect.right) {
          // Knappen er til høyre, scroll til høyre
          targetScrollLeft = buttonOffsetLeft + buttonWidth - containerWidth + 20; // 20px margin
        }
        
        if (targetScrollLeft !== undefined) {
          container.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [active]);

  return (
    <div ref={scrollContainerRef} className="overflow-x-auto mb-4 -mx-6">
      <div className="flex space-x-1 pb-2 px-6" style={{ minWidth: 'max-content' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            ref={active === tab ? activeButtonRef : null}
            className={`${baseClasses} ${
              active === tab ? activeClasses : inactiveClasses
            }`}
            style={active === tab ? {backgroundColor: '#22714D'} : {}}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
