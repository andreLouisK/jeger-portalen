import { useState } from 'react';

export const useTextExpansion = () => {
  const [expandedTexts, setExpandedTexts] = useState({});

  const toggleTextExpansion = (textKey) => {
    setExpandedTexts(prev => ({
      ...prev,
      [textKey]: !prev[textKey]
    }));
  };

  const isTextExpanded = (textKey) => {
    return expandedTexts[textKey] || false;
  };

  const expandAllTexts = () => {
    // Dette kunne brukes for å utvide alle tekster på en gang
    const allKeys = Object.keys(expandedTexts);
    const newExpandedState = {};
    allKeys.forEach(key => {
      newExpandedState[key] = true;
    });
    setExpandedTexts(newExpandedState);
  };

  const collapseAllTexts = () => {
    setExpandedTexts({});
  };

  return {
    expandedTexts,
    setExpandedTexts,
    toggleTextExpansion,
    isTextExpanded,
    expandAllTexts,
    collapseAllTexts
  };
};
