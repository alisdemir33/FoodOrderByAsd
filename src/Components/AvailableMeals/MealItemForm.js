import React from 'react'
import classes from './MealItemForm.module.css'
import Card from '../../UI/Card'

const MealItemForm = () =>{

    return(
    <div className={classes['form']}>
        <div><b>Amount</b>
        <input style={{width:'50px'}} type ="number" min="1" step="1"></input></div>
        <div> <button>+Add</button></div>       
    </div>);
}

export default MealItemForm;