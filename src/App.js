import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  
  {
    id: 'e1',
    title: 'Electricity Bill',
    amount: 12585,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'Bought Video Game', amount: 5050, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Ordinary Bill',
    amount: 1000,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'Income Tax',
    amount: 18000,
    date: new Date(2021, 12, 8),
  },
  {
    id: 'e5',
    title: 'Electricity Bill',
    amount: 12000,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e6',
    title: 'Internet Bill',
    amount: 2099,
    date: new Date(2020, 6, 16),
  },
  {
    id: 'e7',
    title: 'Shopping',
    amount: 5999,
    date: new Date(2020, 5, 18),
  },
  {
    id: 'e8',
    title: 'Car Insurance',
    amount: 1999,
    date: new Date(2019, 3, 16),
  },
  {
    id: 'e9',
    title: 'Bought A.C.',
    amount: 5999,
    date: new Date(2019, 10, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
