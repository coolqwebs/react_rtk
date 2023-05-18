import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import defaultUserAvatar from "../../assets/images/defaultUserAvatar.svg";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/slices/authSlice";
import { Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { totalAmount } = useSelector((state) => state.cart);
  const { email, image } = useSelector((state) => state.auth.user);
  const [openCart, setOpenCart] = useState(false);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  const handleOpenCart = () => setOpenCart(true);
  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white font-inter italic text-2xl font-bold text-center">
            Nursace
        </h3>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <Link to="/">
            <img className="h-28 w-full" src={logo} alt="store" />
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <button
            className="font-inter text-base font-meduim text-center mr-4"
            onClick={onLogout}
          >
            Logout
          </button>
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#383960"
              className="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>

            <p className="font-inter text-base font-meduim text-center mr-2 ml-1">
              Wish List
            </p>
          </div>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpenCart}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1 ">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#383960"
                className="w-6 h-6"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            )}

            <p className="font-inter text-base font-meduim text-center ml-1">
              Shopping Cart
            </p>
            {openCart ? <Cart open={openCart} setOpen={setOpenCart} /> : null}
          </div>
          <div className="flex flex-row items-center pl-4">
            <Avatar
              src={image ? image : defaultUserAvatar}
              alt={email}
              size="sm"
              className="mr-2"
            />
            <p className="font-inter font-meduim text-sm">{email}</p>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 w-full flex justify-around">
        <div className="text-white font-inter text-base font-meduim text-center">
          50% OFF
        </div>
        <div className="text-white font-inter text-base font-meduim text-center">
          Free Shipping and Returns
        </div>
        <div className="text-white font-inter text-base font-meduim text-center">
          Different Payment Methods
        </div>
      </div>
    </>
  );
};

export default Navbar;
