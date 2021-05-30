import {useContext} from 'react';
import classes from './CartItem.module.css';
import CartContext from '../Store/CartStore'
import React from 'react';

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div className={classes['left-group']}>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={ctx.onRemoveFromCart}>−</button>
        <button onClick={ctx.onAddToCart}>+</button>
      </div>
    </li>
  );
};

export default CartItem;