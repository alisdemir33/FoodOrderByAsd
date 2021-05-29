import React from 'react'
import classes from './MealItem.module.css'
import Card from '../../UI/Card'

const MealItemSummary = (props) => {

    return (     
            <div>
              <div> <h3> {props.name}</h3></div>
                <div className={classes.description}>
                   {props.description}
                </div>
                <div className={classes.price}>{props.price}try</div>               
            </div>       
    );

}

export default MealItemSummary;