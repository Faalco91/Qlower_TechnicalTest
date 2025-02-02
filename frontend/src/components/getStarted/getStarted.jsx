import React from "react";
import "./getStarted.css";
import BasicModal from "../modal/modal";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";

const GetStarted = () => { 

    const newTransactionButtonStyle = {
        backgroundColor: '#ECEDEE',
        color: 'black',
        padding: '12px 35px',
        borderRadius: '2rem',
        marginRight: '15px',
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor:'rgba(236, 237, 238, 0.85)',        
        },
    };

    const transactionListButtonStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '12px 35px',
        borderRadius: '2rem',
        border: '1px solid rgba(236, 237, 238, 0.15)',
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor:'rgba(236, 237, 238, 0.07)',        
        },
    };

    return (
        <section className="get-started-container">
            <div className="slogan">
                <h1>Transactions Simplifiées, Finances Maîtrisées</h1>
                <h1></h1>
                <p>Gérez et suivez vos transactions, générez des rapports en temps réel et téléchargez votre balance comptable en toute simplicité.</p>
            </div>
            <div className="ctas-container">
                <BasicModal title="Nouvelle transaction" buttonLabel="Saisir une transaction" buttonStyle={newTransactionButtonStyle} className="cta-modal new-transaction">
                    <TransactionForm />
                </BasicModal>

                <BasicModal title="Liste des transactions" buttonLabel="Lister les transactions" buttonStyle={transactionListButtonStyle} className="cta-modal transaction-list">
                    <TransactionList />
                </BasicModal>
            </div>
        </section>
    );
};

export default GetStarted;