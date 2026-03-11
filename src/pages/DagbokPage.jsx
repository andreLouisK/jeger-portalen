import React, { useEffect } from 'react';

export const DagbokPage = ({ 
  formType, 
  setFormType, 
  formData, 
  setFormData, 
  handleSubmit, 
  calendar 
}) => {
  // Scroll til toppen når komponenten lastes
  useEffect(() => {
    window.scrollTo(0, 0);
    // Scroll også hovedcontaineren
    const mainContainer = document.querySelector('.flex-1.overflow-auto');
    if (mainContainer) {
      mainContainer.scrollTop = 0;
    }
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 pb-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Jaktkalender og logg</h2>

      {!formType && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <button onClick={() => setFormType('Felt vilt')} className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium">Logg felt vilt</button>
          <button onClick={() => setFormType('Planlagt tur')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium">Planlegg tur</button>
          <button onClick={() => setFormType('Observasjon')} className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-3 rounded-lg font-medium">Logg observasjon</button>
          <button onClick={() => setFormType('Notat')} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium">Skriv notat</button>
        </div>
      )}

      {formType && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4" style={{color: '#1A5A3E'}}>{formType}</h3>

          {formType === 'Felt vilt' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Art</label>
              <input type="text" placeholder="F.eks. elg, rådyr, hjort..." value={formData.art || ''} onChange={(e) => setFormData({ ...formData, art: e.target.value })} className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:border-gray-300" style={{'--tw-ring-color': '#22714D', '--tw-border-opacity': '1'}} />
            </div>
          )}

          {formType === 'Planlagt tur' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Dato</label>
              <input type="date" value={formData.date || ''} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:border-gray-300" style={{'--tw-ring-color': '#22714D', '--tw-border-opacity': '1'}} />
            </div>
          )}

          {formType === 'Observasjon' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Observasjon</label>
              <input type="text" placeholder="Hva ble observert?" value={formData.obs || ''} onChange={(e) => setFormData({ ...formData, obs: e.target.value })} className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:border-gray-300" style={{'--tw-ring-color': '#22714D', '--tw-border-opacity': '1'}} />
            </div>
          )}

          {formType === 'Notat' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Notat</label>
              <textarea placeholder="Skriv ditt notat her..." value={formData.note || ''} onChange={(e) => setFormData({ ...formData, note: e.target.value })} className="w-full border border-gray-300 p-3 h-24 rounded-lg focus:ring-2 focus:border-gray-300" style={{'--tw-ring-color': '#22714D', '--tw-border-opacity': '1'}} />
            </div>
          )}

          <div className="flex space-x-3">
            <button onClick={handleSubmit} className="text-white px-6 py-2 rounded-lg font-medium" style={{backgroundColor: '#22714D'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#1A5A3E'} onMouseLeave={(e) => e.target.style.backgroundColor = '#22714D'}>Lagre</button>
            <button onClick={() => setFormType(null)} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium">Avbryt</button>
          </div>
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold mb-4">Jaktlogg ({calendar.length} innlegg)</h3>
        {calendar.length === 0 ? (
          <p className="text-gray-500 italic text-center py-8">Ingen loggføringer ennå. Legg til din første oppføring!</p>
        ) : (
          <div className="space-y-4">
            {calendar.map((entry, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block text-xs px-3 py-1 rounded-full font-semibold mb-2" style={{backgroundColor: '#E8F5F0', color: '#1A5A3E'}}>{entry.type}</span>
                    <p className="text-gray-800 font-medium">
                      {entry.type === 'Felt vilt' && `Art: ${entry.art || 'Ikke spesifisert'}`}
                      {entry.type === 'Planlagt tur' && `Dato: ${entry.date || 'Ikke spesifisert'}`}
                      {entry.type === 'Observasjon' && `Observasjon: ${entry.obs || 'Ingen detaljer'}`}
                      {entry.type === 'Notat' && `${entry.note || 'Tomt notat'}`}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{entry.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
