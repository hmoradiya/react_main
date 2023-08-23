import React, { useContext } from "react";
import "./ProductCard.scss";

import Button from '../Button/Button';
import { CartContext } from "../../Contexts/CartContext";

function ProductCard({product}) {

  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={`${product.name}`} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button inverted={true} label="Add to card" handleClick={() => addItemToCart(product)}  />
    </div>
  );
}

export default ProductCard;
