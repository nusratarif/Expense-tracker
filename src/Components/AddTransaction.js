import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const handleAddition = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return ( 
        <>
        <h3>Add new Transaction</h3>
        <form onSubmit={handleAddition}>
            <div className="form-control">
                <label htmlFor="text"  className="addtrans">Enter Text</label> 
                <input type="text"
                value={text} 
                onChange={(e) => setText(e.target.value)}  
                placeholder="Enter text..."
                required />
            </div>
            <div className="form-control">
                <label htmlFor="amount" className="addtrans">Enter Amount<br />
                (negative - expense, positive - incom)</label>
                <input type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}    
                placeholder="Enter amount..."
                required />
            </div>
            <input type="submit" className="btn" 
            value="Add Transaction"/>
        </form>
        </>
    )
}
