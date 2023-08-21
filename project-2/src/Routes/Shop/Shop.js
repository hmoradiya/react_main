import React, { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Shop.scss";

function Shop() {
  const products = useContext(ProductContext);
  return (
    <div className="container">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard product={product} key={products.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
