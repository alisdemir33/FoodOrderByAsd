import React from 'react'
import Card from '../../UI/Card'
import MealItemSummary from './MealItemSummary'
import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'

const MealItem = (props) => {

    return (
    <li className={classes['meal']}>       
            <MealItemSummary
                name={props.name}
                description={props.description}
                price={props.price}>
            </MealItemSummary>
            <MealItemForm>
            </MealItemForm>       
    </li>)   
}

export default MealItem