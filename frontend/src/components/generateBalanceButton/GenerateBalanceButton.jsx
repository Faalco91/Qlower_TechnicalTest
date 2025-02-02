import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './GenerateBalanceButton.css';
import { LuArrowDownToLine } from "react-icons/lu";

const GenerateBalanceButton = () => {
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const handleGenerateBalance = async () => {
    if (!year || isNaN(year)) {
      setError('Veuillez entrer une année valide.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8000/api/balance-comptable/${year}/`);
      const blob = new Blob([response.data], { type: 'text/csv' });
      saveAs(blob, `balance_comptable_${year}.csv`);
    } catch (error) {
      console.error('Error generating balance', error);
    }
  };

  return (
    <div className='generate-balance-container'>
      <label>Année</label>
      <input 
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="2025"
        className='form-content year'
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <div className='generate-balance-button-container'>
        <button className='generate-balance-button' onClick={handleGenerateBalance}>Télécharger la balance comptable <LuArrowDownToLine /></button>
      </div>
      
    </div>
  );
};

export default GenerateBalanceButton;
