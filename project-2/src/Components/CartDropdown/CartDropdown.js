import React, { useContext } from "react";
import "./CartDropdown.scss";
import Button from "../Button/Button";
import { CartContext } from "../../Contexts/CartContext";
import CartItem from "../CartItem/CartItem"
import { useNavigate } from "react-router-dom";

function CartDropdown() {

  const {cartItems, setIsCartOpen} = useContext(CartContext)


  const navigate = useNavigate();

  const goToCheckout =async () => {
    setIsCartOpen(false);
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      {
          cartItems.map((items) => (
            <CartItem key={items.id} cartItem={items} />
            ))
        }
      </div>
      <Button label="GO TO CHECKOUT" handleClick={goToCheckout} />
    </div>
  );
}

export default CartDropdown;
