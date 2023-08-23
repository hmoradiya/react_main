import React, { useContext } from 'react'
import "./Checkout.scss"
import { CartContext } from '../../Contexts/CartContext'
import CheckOutItem from '../../Components/CheckOutItem/CheckOutItem'

function Checkout() {

    const {cartItems, totalPriceCount} = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${totalPriceCount}</div>
    </div>
  )
}

export default Checkout