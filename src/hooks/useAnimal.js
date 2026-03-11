import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { viltData as animals } from '../data_viltdata';

export const useAnimal = () => {
  const navigate = useNavigate();
  const { animalId } = useParams();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('alle');
  const [detailTab, setDetailTab] = useState('Om Storfugl');

  // Hent tilgjengelige tabs for valgt dyr
  const getAvailableTabs = (animal) => {
    if (!animal || !animal.details) return ['Om Storfugl', 'Jaktformer', 'Utnyttelse', 'Bestand'];
    return Object.keys(animal.details);
  };

  // Last inn dyr basert på URL parameter
  useEffect(() => {
    console.log('useAnimal useEffect triggered, animalId:', animalId);
    if (animalId) {
      const animal = animals.find(a => a.id === animalId);
      console.log('Found animal:', animal);
      if (animal) {
        setSelectedAnimal(animal);
        // Sett første tilgjengelige tab
        const availableTabs = animal.details ? Object.keys(animal.details) : ['Om Storfugl', 'Jaktformer', 'Utnyttelse', 'Bestand'];
        setDetailTab(availableTabs[0]);
        console.log('Set selectedAnimal and detailTab');
      }
    } else {
      setSelectedAnimal(null);
    }
  }, [animalId]);

  // Naviger til dyre-detaljside
  const navigateToAnimalDetail = (animal) => {
    navigate(`/detail/${animal.id}`);
  };

  // Reset animal state
  const resetAnimal = () => {
    setSelectedAnimal(null);
    setDetailTab('Om Storfugl');
    navigate('/');
  };

  return {
    selectedAnimal,
    setSelectedAnimal,
    selectedCategory,
    setSelectedCategory,
    detailTab,
    setDetailTab,
    getAvailableTabs,
    navigateToAnimalDetail,
    resetAnimal
  };
};
