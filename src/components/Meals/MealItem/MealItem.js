import React, { useState } from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`
  const [amount, setTotalBill] = useState(0)

  const raiseTotal = (amount) => {
    setTotalBill(parseInt(amount, 10))
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
          raiseTotal={raiseTotal} />
      </div>

      {`$${(props.price * amount).toFixed(2)}`}
    </li>
  )
}


export default MealItem

