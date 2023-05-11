import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const FilteredProducts = () => {
  const { type } = useParams();
  const products = useSelector((state) => state.products.filteredProducts);
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter font-bold text-gray-600">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              text={product.text}
              price={product.price}
              color={product.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
