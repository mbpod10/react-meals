import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [btnHighLight, setBtnHighlight] = useState(false)
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighLight ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnHighlight(true)

    const timer = setTimeout(() => {
      setBtnHighlight(false)
    }, 300);
    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <>
      <button className={btnClasses} onClick={props.onShowCart}>
        <span className={classes.icon}> <CartIcon /> </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
          {numberOfCartItems}
        </span>
      </button>
    </>
  )
}

export default HeaderCartButton
