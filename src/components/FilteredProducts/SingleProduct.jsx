import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "../../utils";
import { Button, Tooltip } from "@material-tailwind/react";
import { addToCard } from "../../features/slices/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [product] = useSelector((state) => state.products.singleProduct);

  const productSize = product.size ? product.size[0] : "";
  const productColor = product.color ? product.color[0] : "";

  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  const addToCartHandler = () => {
    dispatch(
      addToCard({
        id: product.id,
        name: product.name,
        img: product.img,
        text: product.text,
        size: size,
        color: color,
        amount: 1,
        price: product.price,
        totalPrice: product.price,
      })
    );
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="pl-44 grow-[2]">
        <img
          className="h-[850px] rounded-lg "
          src={product.img}
          alt={product.name}
        />
      </div>
      <div className="grow-[3]">
        <div className="max-w-lg">
          <h5 className="text-2xl font-inter font-bold pb-4">{product.name}</h5>
          <p className="text-orange-700 txet-xl font-inter font-bold">
            15% OFF
          </p>
          <p className="text-gray-600 txet-xl font-inter font-bold">
            {product.text}
          </p>
          {product.size ? (
            <div className="mt-4">
              <label className="block mb-2 text-md font-inter font-bold text-gray-900 dark:text-white">
                Pick a size
                <select
                  name="Size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {product.size.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}
          {product.color ? (
            <div className="mt-4">
              <label className="block mb-2 text-md font-inter font-bold text-gray-900 dark:text-white">
                Pick a color
                <select
                  name="Color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {product.color.map((item) => (
                    <option key={item} value={item}>
                      {capitalize(item)}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}
          <Tooltip content="Add To Cart" placement="bottom-start">
            <Button
              className="mt-4 hover:bg-green-300 duration-300 ease-in-out"
              color="gray"
              size="lg"
              variant="outlined"
              ripple={true}
              onClick={addToCartHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
