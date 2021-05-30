import React from 'react'
import classes from './AvailableMeals.module.css'
import { DUMMY_MEALS } from './DummyMeals';
import Card from '../../UI/Card'
import MealItem from './MealItem'

const AvailableMeals = () => {

    return (
        <ul>
            <Card className={classes['meals']}>
                {DUMMY_MEALS.map((currMeal) => {
                    return (
                        <MealItem
                            key={currMeal.id}
                            name={currMeal.name}
                            description={currMeal.description}
                            price={currMeal.price}>
                        </MealItem>
                    )
                })
                }
            </Card>
        </ul>
    )
}

export default AvailableMeals;