import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setSingleProduct } from "../../features/slices/productsSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, img, name, text, price, color }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  const onCardClickHandler = () => {
    dispatch(setSingleProduct(id));
  };
  return (
    <Link to={`/filtered-products/${type}/${id}`}>
      <Card onClick={onCardClickHandler}>
        <CardHeader color="blue-gray" className="relative h-96">
          <img src={img} alt={name} layout="fill" className="h-full w-full" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{price} $</Typography>
          <Typography variant="small" color="gray">
            {color.map((color) => (
              <i
                className="fas fa-map-marker-alt fa-sm mt-[3px] px-3 py-1 rounded-full mr-4"
                key={color}
                style={{ backgroundColor: color }}
              />
            ))}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
