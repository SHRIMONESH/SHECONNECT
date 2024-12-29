import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import "./PersonalPage.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PersonalPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    category: '',
    amount: '',
    type: 'Hard Cash',
    reason: '',
  });

  const [categories, setCategories] = useState([
    'Food',
    'Transport',
    'Shopping',
    'Bills',
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (form.category && form.amount && form.type) {
      setExpenses([...expenses, { ...form, amount: parseFloat(form.amount) }]);
      setForm({ category: '', amount: '', type: 'Hard Cash', reason: '' });
    }
  };

  const addCategory = (e) => {
    e.preventDefault();
    const newCategory = prompt('Enter a new category:');
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  const expenseData = categories.reduce(
    (acc, category) => {
      const total = expenses
        .filter((expense) => expense.category === category)
        .reduce((sum, expense) => sum + expense.amount, 0);
      return { ...acc, [category]: total };
    },
    {}
  );

  const pieData = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        data: Object.values(expenseData),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return (
    <div className="PersonalPage">
      <div className="container">
        <h1>Personal Financial Tracker</h1>
        <form onSubmit={addExpense}>
          <div>
            <label>Category:</label>
            <select
              name="category"
              value={form.category}
              onChange={handleInputChange}
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Type:</label>
            <select name="type" value={form.type} onChange={handleInputChange}>
              <option value="Hard Cash">Hard Cash</option>
              <option value="Account Cash">Account Cash</option>
              <option value="Self Transfer">Self Transfer</option>
            </select>
          </div>
          <div>
            <label>Reason:</label>
            <input
              type="text"
              name="reason"
              value={form.reason}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Add Expense</button>
        </form>
        <button onClick={addCategory}>Add New Category</button>
        <div className="pie-chart">
          <Pie data={pieData} />
        </div>
        <h2>Expense Details</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.category} - {expense.amount} ({expense.type}) - {expense.reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonalPage;
