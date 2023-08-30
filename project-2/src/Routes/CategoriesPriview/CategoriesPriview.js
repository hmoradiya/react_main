import React, { useContext } from "react";
import { CategoriesContext } from "../../Contexts/CategoriesContext";
import CategoryPriview from "../../Components/CategoryPriview/CategoryPriview";

function CategoriesPriview() {
  const categories = useContext(CategoriesContext);
  return (
<div className="container-fluid">
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPriview title={title} products={products} key={title} />
        )
      })}
    </div>
  );
}

export default CategoriesPriview;
