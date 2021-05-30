import React, { useState, useEffect } from 'react';

const CartContext = React.createContext({
  cartList:  [],
  onAddToCart: (item) => {},
  onIncreaseAmount: (item) => {},
  onDecreaseAmount: (item) => {}
});

export const CartContextProvider = (props) => {
  const [currentCartList, setCurrentCartList] = useState([]);

  useEffect(() => {
    //const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
   const list = [
        {
            name: 'snitzel',
            price: 3.46,
            amount: 2
        },
        {
            name: 'soup',
            price: 1.4,
            amount: 3
        },
        {
            name: 'baklava',
            price: 1.4,
            amount: 4
        }
    ];
    setCurrentCartList(list);
  }, []);

  const onAddToCartHandler = () => {   
   // setIsLoggedIn(false);
  };

  const onIncAmountHandler = () => {  
    // setIsLoggedIn(true);
  };


  const onDecAmountHandler = () => {  
    // setIsLoggedIn(true);
  };

  return (
    <CartContext.Provider
      value={{
         cartList:currentCartList ,
        onAddToCart: onIncAmountHandler,
        onIncreaseAmount:onIncAmountHandler,
        onDecreaseAmount: onDecAmountHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;