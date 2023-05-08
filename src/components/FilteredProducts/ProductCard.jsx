import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const ProductCard = ({ id, img, name, text, price, colors }) => {
  return (
    <Card>
      <CardHeader color="blue-gray" className="relative h-96">
        <img src={img} alt={name} layout="fill" className="h-full w-full" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="small">{price}$</Typography>
        <Typography variant="small" color="gray">
          {colors.map((color) => (
            <i
              className="fas fa-map-marker-alt fa-sm mt-[3px]p-2 rounded-full mr-4"
              key={color}
              style={{ backgroundColor: color }}
            ></i>
          ))}
        </Typography>
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
