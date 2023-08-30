import React, { useContext, useEffect, useState } from "react";
import "./Category.scss";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../Contexts/CategoriesContext";
import ProductCard from "../../Components/ProductCard/ProductCard";

function Category() {
  const { category } = useParams();
  const categories = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <div className="container-fluid">
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="row">
        {products &&
          products.map((product) => (
            <div className="col-lg-3 col-md-4 col-12 mb-5">
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Category;
