import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import '../styles/ExpenseTracker.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    if (description && amount) {
      const newExpense = { description, amount: parseFloat(amount) };
      setExpenses([...expenses, newExpense]);
      setDescription('');
      setAmount('');
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="dashboard">
      {/* Sidebar Navbar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Top Bar */}
        <TopBar title="Expense Tracker" />

        {/* Expense Tracker Content */}
        <div className="expense-tracker ex-st">
          <h2>Expense Tracker</h2>
          <div className="expense-form">
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="btn primary-btn" onClick={addExpense}>
              Add Expense
            </button>
          </div>
          <div className="expense-list">
            {expenses.map((expense, index) => (
              <div key={index} className="expense-item">
                <span>{expense.description}</span>
                <span>${expense.amount.toFixed(2)}</span>
                <button className="btn delete-btn" onClick={() => deleteExpense(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
