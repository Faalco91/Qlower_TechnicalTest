import React from "react";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";
import GenerateBalanceButton from "../GenerateBalanceButton/GenerateBalanceButton";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <TransactionList />
      <TransactionForm />
      <GenerateBalanceButton />
    </div>
  );
}

export default Home;