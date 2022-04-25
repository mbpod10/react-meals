import React, { useState, useRef } from 'react'
import classes from "./MealItemForm.module.css"
import Input from '../../UI/Input';

const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1) {
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <>
      <form className={classes.form} onSubmit={onSubmit}>
        <Input label="Amount"
          ref={amountInputRef}
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            max: '5',
            min: '0',
            step: '1',
            defaultValue: '1'
          }} />
        <button >
          Add+
        </button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
      </form>
    </>
  )
}

export default MealItemForm