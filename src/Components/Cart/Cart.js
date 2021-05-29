import React from 'react'
import classes  from './HeaderCartButton.module.css'
import CartIcon, {icon} from './CartIcon'

const Cart = (props) => {
 
    return(
        <div className={classes.button} onClick={props.cartClicked}>
            <CartIcon></CartIcon> 
            Your Cart           
            <div className={classes.badge}>4</div>
        </div>
    )
}

export default Cart