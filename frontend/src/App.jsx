import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import GenerateBalanceButton from './components/GenerateBalanceButton';

const App = () => {
  return (
    <Router>
        <TransactionList />
        <TransactionForm />
        <GenerateBalanceButton />
    </Router>
  );
};

export default App;
