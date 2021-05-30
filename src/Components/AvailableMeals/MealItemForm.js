import React, { useState } from 'react'
import classes from './MealItemForm.module.css'
import Card from '../../UI/Card'

const MealItemForm = (props) => {
    const [amount, setAmount] = useState();

    const amountChangeHandler = (event) => {
        event.preventDefault();
        setAmount(event.target.value);
    }

    const clicked = () => {
        props.onAdd(
            {
                name: props.name,
                price: props.price,
                amount: amount
            }
        );
    }

    return (
        <div className={classes['form']}>
            <div><b>Amount</b>
                <input style={{ width: '50px' }} onChange={amountChangeHandler} value={amount} type="number" min="1" step="1"></input></div>
            <div> <button onClick={clicked}>+Add</button></div>
        </div>);
}

export default MealItemForm;