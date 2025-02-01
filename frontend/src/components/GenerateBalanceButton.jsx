import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

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
    <div>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Entrez l'année"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleGenerateBalance}>Générer la balance comptable</button>
    </div>
  );
};

export default GenerateBalanceButton;
