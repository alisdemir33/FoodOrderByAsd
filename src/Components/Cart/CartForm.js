import React, {useContext} from 'react';
import CartItem from './CartItem'
import CartContext from '../Store/CartStore'

/* const CartList =
    [
        {
            name: 'snitze',
            price: 3.46,
            amount: 2
        },
        {
            name: 'soup',
            price: 1.4,
            amount: 3
        }
    ] */


const CartForm = (props) => {

    const ctx = useContext(CartContext);

    return ctx.cartList.map( (listItem) =>{
        return <CartItem name={listItem.name} amount ={listItem.amount} price={listItem.price}></CartItem>
    })

}
export default CartForm;