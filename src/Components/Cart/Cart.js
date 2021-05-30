import React, { useContext } from 'react'
import classes  from './HeaderCartButton.module.css'
import CartIcon, {icon} from './CartIcon'
import CartContext from '../Store/CartStore'

const Cart = (props) => {
    const ctx = useContext(CartContext);
 
    return(
        <div className={classes.button} onClick={props.cartClicked}>
            <CartIcon></CartIcon> 
            Your Cart           
            <div className={classes.badge}> {ctx.cartList.length}</div>
        </div>
    )
}

export default Cart