import { Button } from "@material-tailwind/react";
import React from "react";

const NavigateButtons = () => {
  const buttons = [
    "Hoddies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button) => (
          <div className="mr-4" key={button}>
            <Button>{button}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigateButtons;
