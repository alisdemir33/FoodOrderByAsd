import React , {useContext}from 'react'
import Card from '../../UI/Card'
import MealItemSummary from './MealItemSummary'
import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'
import CartContext from '../Store/CartStore'

const MealItem = (props) => {

    const ctx = useContext(CartContext);

    const addToCart = (item) => {
        console.log('MealITEM'+item)
        ctx.onAddToCart(item);
    }

    return (
    <li className={classes['meal']}>       
            <MealItemSummary
                name={props.name}
                description={props.description}
                price={props.price}>
            </MealItemSummary>
            <MealItemForm  name={props.name}  price={props.price} onAdd ={addToCart}>
            </MealItemForm>       
    </li>)   
}

export default MealItem