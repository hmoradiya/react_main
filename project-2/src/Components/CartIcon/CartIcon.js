import React , {useContext} from 'react'
import './CartIcon.scss'
import ShoppingIcon from '../../Assets/shopping-bag.svg'
import { CartContext } from "../../Contexts/CartContext";


function CartIcon() {

  const {isCartOpen, setIsCartOpen} = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
    <img src={ShoppingIcon} alt='cart' className='shopping-icon' />
    <span className='item-count'></span>
  </div>
  )
}

export default CartIcon