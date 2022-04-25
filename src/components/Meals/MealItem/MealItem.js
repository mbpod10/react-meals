import React, { useState } from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`
  // const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [mealList, setMealList] = useState({})

  const raiseTotal = (amount) => {
    // setAmount(parseInt(amount, 10))
    setTotal(props.price * amount)
    props.raiseTotal(parseInt(amount, 10))
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>
          {props.description}
        </div>
        <div className={classes.price}>
          {price}
        </div>
      </div>

      <div>
        <MealItemForm
          key={props.id}
          price={props.price}
          raiseTotal={raiseTotal}
          id={props.id} />
      </div>
    </li>
  )
}


export default MealItem

