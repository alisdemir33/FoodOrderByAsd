import React from 'react';
import CartItem from './CartItem'

const CartList =
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
    ]

const CartForm = (props) => {
    return CartList.map( (listItem) =>{
        return <CartItem name={listItem.name} amount ={listItem.amount} price={listItem.price}></CartItem>
    })

}
export default CartForm;