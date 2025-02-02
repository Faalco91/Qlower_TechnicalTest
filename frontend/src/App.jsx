import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  );
};

export default App;
