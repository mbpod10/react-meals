import React, { useState } from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`
  const [totalBill, setTotalBill] = useState(0)

  const raiseTotal = (total) => {
    // console.log(total)
    // let tempAmount = price * total
    // setTotalBill(...total, parseInt(total), 10)
    setTotalBill(total)
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
        <MealItemForm key={props.id} price={props.price} raiseTotal={raiseTotal} />
      </div>
      {`$${(props.price * totalBill).toFixed(2)}`}
    </li>
  )
}


export default MealItem

