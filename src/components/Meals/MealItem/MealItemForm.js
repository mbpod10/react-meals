import React, { useState } from 'react'
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
  const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

  const [amount, setAmount] = useState(0)

  const raiseTotal = (amount) => {
    props.raiseTotal(amount)
  }

  const handleChange = (event) => {
    if (rx_live.test(event.target.value)) {
      setAmount(event.target.value);
      raiseTotal(event.target.value)
    }
  }

  const handleButtonChange = (event) => {
    let numberHandle = parseInt(amount, 10) + 1
    setAmount(numberHandle)
    raiseTotal(numberHandle)
  }

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <form className={classes.form} onSubmit={onSubmit}>
        <div>
          <label htmlFor="order">Amount</label>
          <input type="number" id="order" name="order" value={amount}
            min="0" max="100" onChange={handleChange} />
        </div>
        <button onClick={handleButtonChange}>
          Add+
        </button>
      </form>
    </>
  )
}

export default MealItemForm