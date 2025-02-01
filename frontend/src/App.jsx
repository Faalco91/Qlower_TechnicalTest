import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionList from './components/TransactionList/TransactionList';
import GenerateBalanceButton from './components/GenerateBalanceButton/GenerateBalanceButton';
import Home from './components/home/home';

const App = () => {
  return (
    <Router>
        <Home />
    </Router>
  );
};

export default App;
