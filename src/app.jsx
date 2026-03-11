import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationItem } from './components';
import ScrollToTop from './components/ScrollToTop';
import { HomePage, DetailPage, DagbokPage, OtherPage, ViltPage } from './pages';
import { useNavigation, useAnimal, useCalendar, useTextExpansion } from './hooks';

const AppContent = () => {
  // Custom hooks
  const { page, sidebarOpen, navigateToPage, closeSidebar, toggleSidebar } = useNavigation();
  const { 
    selectedAnimal, 
    selectedCategory, 
    setSelectedCategory, 
    detailTab, 
    setDetailTab, 
    getAvailableTabs, 
    navigateToAnimalDetail 
  } = useAnimal();
  const { 
    calendar, 
    formType, 
    setFormType, 
    formData, 
    setFormData, 
    handleSubmit 
  } = useCalendar();
  const { expandedTexts, toggleTextExpansion } = useTextExpansion();

  return (
    <div className="flex h-screen bg-gray-50">
      <ScrollToTop />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={`fixed z-50 md:relative md:translate-x-0 sidebar-transition sidebar-mobile ${sidebarOpen ? 'open' : ''} w-64 h-full text-white`} style={{background: 'linear-gradient(to bottom, #1A5A3E, #0F3A2A)'}}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-xl font-bold">Jeger-Portalen</h1>
              <p className="text-sm" style={{color: '#D1EBE0'}}>Din vei til jaktkunnskapen</p>
            </div>
            <button className="md:hidden text-white" onClick={closeSidebar}>✕</button>
          </div>

          <div className="space-y-2 mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{color: '#E8F5F0'}}>Navigasjon</h3>
            <NavigationItem icon="🏠" text="Hjem" active={page === 'home'} onClick={() => navigateToPage('home')} />
            <NavigationItem icon="ℹ️" text="Alt om jaktbare arter" active={page === 'vilt'} onClick={() => navigateToPage('vilt')} />
            <NavigationItem icon="⚠️" text="Alt om jaktvåpen" active={page === 'vapen'} onClick={() => navigateToPage('vapen')} />
            <NavigationItem icon="📰" text="Jakt nyheter" active={page === 'nyheter'} onClick={() => navigateToPage('nyheter')} />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{color: '#E8F5F0'}}>Min Jeger Profil</h3>
            <NavigationItem icon="👤" text="Profil" active={page === 'profil'} onClick={() => navigateToPage('profil')} />
            <NavigationItem icon="📅" text="Dagbok" active={page === 'Dagbok'} onClick={() => navigateToPage('Dagbok')} />
            <NavigationItem icon="⚠️" text="Våpenskap" active={page === 'vapenskap'} onClick={() => navigateToPage('vapenskap')} />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between flex-shrink-0">
          <button onClick={toggleSidebar}>
            <span className="text-xl">☰</span>
          </button>
          <h1 className="font-bold text-gray-900">Jeger-Portalen</h1>
          <div></div>
        </div>

        <div className="flex-1 overflow-auto pb-10">
          <Routes>
            <Route path="/" element={
              <HomePage 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                navigateToAnimalDetail={navigateToAnimalDetail}
              />
            } />
            
            <Route path="/detail/:animalId" element={
              <DetailPage 
                expandedTexts={expandedTexts}
                toggleTextExpansion={toggleTextExpansion}
              />
            } />
            
            <Route path="/dagbok" element={
              <DagbokPage 
                formType={formType}
                setFormType={setFormType}
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                calendar={calendar}
              />
            } />
            
            <Route path="/vilt" element={
              <ViltPage 
                expandedTexts={expandedTexts}
                toggleTextExpansion={toggleTextExpansion}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                navigateToAnimalDetail={navigateToAnimalDetail}
              />
            } />
            <Route path="/vapen" element={<OtherPage page="vapen" />} />
            <Route path="/nyheter" element={<OtherPage page="nyheter" />} />
            <Route path="/profil" element={<OtherPage page="profil" />} />
            <Route path="/vapenskap" element={<OtherPage page="vapenskap" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;