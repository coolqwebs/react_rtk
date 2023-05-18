import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Tooltip,
} from "@material-tailwind/react";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Cart = ({ open, setOpen }) => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <>
      {cart.length > 0 ? (
        <Dialog
          open={open}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>List of items in your cart</DialogHeader>
          <DialogBody
            divider
            className="flex flex-col justify-center items-start h-min max-h-[40rem] overflow-scroll"
          >
            {cart.map((item) => (
              <div className="" key={item.id}>
                <div className="grid grid-cols-2 justify-items-center items-center py-4">
                  <div>
                    <img
                      className="h-[125px] rounded-md"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="flex flex-cols items-start">
                      <h4 className="text-black text-base font-inter font-bold pt-2">
                        {item.name}
                      </h4>
                    </div>
                    <div className="max-w-xs">
                      <p className="text-black text-xs font-inter pt-2">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-black text-sm font-inter pt-2">
                      Selected Size: <span className="ml-2">{item.size}</span>
                    </p>
                    <p className="text-black text-sm font-inter pt-2">
                      Selected Color:{" "}
                      <span
                        className="ml-2 rounded-full px-2"
                        style={{ backgroundColor: item.color }}
                      ></span>
                    </p>
                    <p className="text-black text-sm font-inter pt-2">
                      Amount: <span className="ml-2">{item.amount}</span>
                    </p>
                    <p className="text-black text-sm font-inter pt-2">
                      Price: <span className="ml-2">{item.price} $</span>
                    </p>
                    <p className="text-black text-sm font-inter pt-2">
                      Total Price:{" "}
                      <span className="ml-2">{item.totalPrice} $</span>
                    </p>
                    <div className="pt-4">
                      <Tooltip content="Remove from Cart" placement="bottom">
                        <Button
                          size="xs"
                          color="red"
                          ripple={false}
                          variant="filled"
                          onClick={() => removeFromCartHandler(item)}
                        >
                          Remove
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </DialogBody>
          <DialogFooter className="flex justify-start items-center">
            <p className="text-black text-base font-inter pt-2">
              Total Price: <span className="ml-2">{totalPrice}</span>
            </p>
          </DialogFooter>
        </Dialog>
      ) : (
        <Dialog
          className="border-0 outline-0"
          open={open}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Shopping Cart</DialogHeader>
          <DialogBody divider>
            <h1 className="text-black text-3xl font-inter font-bold py-4">
              Your cart is empty
            </h1>
            <p className="text-black text-base font-inter">Add some products</p>
          </DialogBody>
          <DialogFooter>hui</DialogFooter>
        </Dialog>
      )}
    </>
  );
};

export default Cart;
