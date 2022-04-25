import { useContext } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCardItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount
  }, 0)

  return (
    <>
      <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>

        <span>
          Your Cart
        </span>

        <span className={classes.badge}>
          {numberOfCardItems}
        </span>
      </button>
    </>
  )
}

export default HeaderCartButton
