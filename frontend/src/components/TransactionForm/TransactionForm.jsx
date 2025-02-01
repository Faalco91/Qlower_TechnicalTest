import React, { useState } from 'react';
import { validateTransaction } from '../../utils/validators';
import axios from 'axios';

const TransactionForm = () => {
  const [date, setDate] = useState('');
  const [categorie, setCategorie] = useState('Ventes');
  const [montant, setMontant] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateTransaction(date, montant);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/transactions/', {
        date,
        categorie,
        montant,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error creating transaction', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>Catégorie</label>
        <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
          <option value="Ventes">Ventes</option>
          <option value="Achats">Achats</option>
          <option value="Salaires">Salaires</option>
        </select>
      </div>
      <div>
        <label>Montant</label>
        <input
          type="number"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Ajouter Transaction</button>
    </form>
  );
};

export default TransactionForm;
