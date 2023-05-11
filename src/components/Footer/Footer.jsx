import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="">
      <hr className="h-px w-4/5 bg-gray-400 opacity-50 mx-auto outline-none border-none" />
      <div className="flex justify-around items-center pt-4">
        <img className="h-20" src={logo} alt="logo" />
        <p className="text-black text-sm font-inter no-underline normal-case">
          Copyright &copy; {year} page by @coolqwebs
        </p>
      </div>
    </div>
  );
};

export default Footer;
