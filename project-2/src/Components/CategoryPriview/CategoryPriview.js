import React from "react";
import "./CategoryPriview.scss";
import ProductCard from "../ProductCard/ProductCard"
import { Link } from "react-router-dom";

function CategoryPriview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPriview;
