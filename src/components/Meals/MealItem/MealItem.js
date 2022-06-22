import React, { useContext } from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  const cardCtx = useContext(CartContext)

  const price = `$${props.price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    cardCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    })
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
          onAddToCart={addToCartHandler}
          id={props.id} />
      </div>
    </li>
  )
}


export default MealItem

