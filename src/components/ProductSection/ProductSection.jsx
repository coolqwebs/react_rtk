import React from "react";
import { storeData } from "../../assets/data/data";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-red-600 text-center text-lg font-inter font-bold">
          SUMMER SALE 30%
        </h2>
      </div>
      <div className="grid grid-cols-3 justify-items-center py-8 gap-5 mx-auto max-w-7xl">
        {storeData.slice(0, 18).map((product) => (
          <ProductSectionItem
            key={product.id}
            id={product.id}
            name={product.name}
            text={product.text}
            img={product.img}
            size={product.size}
            color={product.color}
            price={product.price}
            totalPrice={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
