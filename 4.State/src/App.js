import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {

  let titl = 'initial';
  const [title, setTitle] = useState(titl);

  const expensesdata = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Lets get started"),
  //   React.createElement(Expenses, { expenses: expensesdata })
  // );

  const changeTitle = () => {
    setTitle('updated');


  }

  const addExpenseHandler = expense => {
    console.log('In App js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses expenses={expensesdata} />
      <button onClick={changeTitle}>update all</button>
    </div>

  );
}

export default App;
