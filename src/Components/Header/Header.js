import React from 'react'
import reactDom from 'react-dom'
import classes from './Header.module.css'
import Cart from '../Cart/Cart'

const Header = (props) => {
    return (
    <React.Fragment>
    <div className={classes['header']}>
        React Mealsss <Cart cartClicked={props.clickHandler}></Cart>
    </div>
</React.Fragment>);

}

export default Header;