import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from '../Chart/ExpensesChart'

const Expenses = (props) => {

    const [YearFiltered, setYearFiltered] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setYearFiltered(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === YearFiltered;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={YearFiltered} onFilterChanged={filterChangeHandler} />

                {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p> :
                {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map(expense => <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />)

                } */}

                <ExpensesChart expenses={filteredExpenses} />

                <ExpenseList expenses={filteredExpenses} />
                {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} /> */}
            </Card>
        </div>
    );
}

export default Expenses;