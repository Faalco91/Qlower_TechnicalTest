import React from "react";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";
import GetStarted from "../getStarted/getStarted";
import "./home.css";

const Home = () => {
  return (
    <section className="home-container">
        <main className="home-content">
            <GetStarted />
        </main>
    </section>
  );
}

export default Home;