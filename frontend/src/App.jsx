import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionList from './components/TransactionList/TransactionList';
import GenerateBalanceButton from './components/GenerateBalanceButton/GenerateBalanceButton';
import Home from './components/home/home';
import Header from './components/header/header';

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
};

export default App;
