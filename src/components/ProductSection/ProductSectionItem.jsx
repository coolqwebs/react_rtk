import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../features/slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  color,
  price,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];
  return (
    <Card className="w-96">
      <Typography
        variant="h4"
        className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700"
      >
        SALE%
      </Typography>
      <CardHeader floated={false} className="h-96">
        <img
          className="shadow-xl shadow-blue-gray-900/50 "
          src={img}
          alt={name}
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="gray" className="font-medium" textGradient>
          {text}
        </Typography>
        <div className="flex justify-around items-center pt-4">
          <Typography color="red" className="font-medium" textGradient>
            Sizes left:{" "}
            <span className="text-gray-400 text-base font-ultralight">
              {defaultSize}
            </span>
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            Color:{" "}
            <Tooltip content={defaultSize} placement="top">
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Tooltip>
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Add To Cart" placement="bottom">
          <Button
            className="hover:bg-green-300 duration-300 ease-in-out"
            color="blue-gray"
            size="lg"
            variant="outlined"
            ripple={true}
            onClick={() =>
              dispatch(
                addToCard({
                  id: id,
                  img: img,
                  name: name,
                  text: text,
                  size: defaultSize,
                  color: defaultColor,
                  price: price,
                  amount: 1,
                  totalPrice: totalPrice,
                })
              )
            }
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
      </CardFooter>
    </Card>
  );
};

export default ProductSectionItem;
