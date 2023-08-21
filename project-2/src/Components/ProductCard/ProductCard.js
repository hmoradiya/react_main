import React from "react";
import "./ProductCard.scss";

import Button from '../Button/Button';

function ProductCard({product}) {
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={`${product.name}`} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button inverted={true} label="Add to card" />
    </div>
  );
}

export default ProductCard;
