import React, { useReducer, useState } from 'react';

import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const reducer = (total, action) => {
  if (action.type === 'change') {
    console.log(action)
    return total = action.payload
  }
}

const AvailableMeals = () => {

  // const [totalUnits, setTotalUnits] = useState(0)

  const [total, dispatch] = useReducer(reducer, 0)

  const raiseTotal = (units) => {
    // console.log(units)
    dispatch({ type: 'change', payload: units })
    console.log(total)
  }

  const mealsList = DUMMY_MEALS.map((meal, index) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        raiseTotal={raiseTotal}
      />
    )
  })

  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes['meals-ul']}>
          {mealsList}
        </ul>
      </Card>
    </section>

  )
}

export default AvailableMeals