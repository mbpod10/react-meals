import React, { useState } from 'react'
import classes from "./MealItemForm.module.css"
import Input from '../../UI/Input';

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
        <Input label="Amount"
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            max: '5',
            min: '0',
            step: '1',
            defaultValue: '0'
          }} />
        <button onClick={handleButtonChange}>
          Add+
        </button>
      </form>
    </>
  )
}

export default MealItemForm