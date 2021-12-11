// import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2021, 12, 21);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    // const [title, setTitle] = useState(props.title);

    // const buttonClick = () => {
    //     setTitle('updated');
    //     console.log(title); // you will see old value. take few mili seconds to update
    // }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                </div>
                {/* <button onClick={() => { console.log("clicked") }}>Change Title</button> */}
                {/* <button onClick={buttonClick}>Change Title</button> */}
            </Card>
        </li>
    );

}

export default ExpenseItem;
