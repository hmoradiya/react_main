import React, { useContext } from "react";
import "./CartDropdown.scss";
import Button from "../Button/Button";
function CartDropdown() {

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button label="GO TO CHECKOUT" />
    </div>
  );
}

export default CartDropdown;
