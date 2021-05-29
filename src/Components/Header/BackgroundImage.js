import React from 'react'
import classes from './Header.module.css'
import meals from './meals.jpg'

const BackgroundImage = () =>
{
return (
    
    <div>
        <img className={classes['main_image']} src ={meals}></img>
    </div>
);

}
export default BackgroundImage;