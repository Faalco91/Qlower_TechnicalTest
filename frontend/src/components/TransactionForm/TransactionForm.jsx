import React, { useState } from 'react';
import { validateTransaction } from '../../utils/validators';
import axios from 'axios';
import './TransactionForm.css';
import GenerateBalanceButton from '../generateBalanceButton/GenerateBalanceButton';
import { LuCircleFadingArrowUp } from "react-icons/lu";


const TransactionForm = () => {
  const [date, setDate] = useState('');
  const [categorie, setCategorie] = useState('');
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
      <div className='form-content date'>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className='form-content categorie'>
        <label>Catégorie</label>
        <select value={categorie} onChange={(e) => setCategorie(e.target.value)} required>
          <option value="" disabled>Choisir une catégorie</option>
          <option value="Ventes">Ventes</option>
          <option value="Achats">Achats</option>
          <option value="Salaires">Salaires</option>
        </select>
      </div>
      <div className='form-content montant'>
        <label>Montant</label>
        <input
          type="number"
          placeholder='100'
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className='submit-form-container'>
        <button type="submit" className='submit-form'>Ajouter la transaction <LuCircleFadingArrowUp /></button>
      </div>
      <GenerateBalanceButton />
    </form>
  );
};

export default TransactionForm;
