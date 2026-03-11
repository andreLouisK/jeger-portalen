import { useState } from 'react';

export const useCalendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [formType, setFormType] = useState(null);
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    const timestamp = new Date().toLocaleString('no-NO');
    setCalendar((prev) => [...prev, { type: formType, timestamp, ...formData }]);
    setFormData({});
    setFormType(null);
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({});
    setFormType(null);
  };

  const deleteEntry = (index) => {
    setCalendar(prev => prev.filter((_, i) => i !== index));
  };

  return {
    calendar,
    setCalendar,
    formType,
    setFormType,
    formData,
    setFormData,
    handleSubmit,
    updateFormData,
    resetForm,
    deleteEntry
  };
};
