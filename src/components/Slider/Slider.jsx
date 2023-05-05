import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dotSlide,
  nextSlide,
  prevSlide,
} from "../../features/slices/sliderSlice";
import { sliderData } from "../../assets/data/data.js";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === slideIndex
                ? "opacity-100 duration-700 ease-in scale-100"
                : "opacity-0 duration-700 ease-in scale-90"
            }
          >
            <div>
              {parseInt(item.id) === slideIndex ? (
                <img
                  className="h-[65%] w-full"
                  src={item.img}
                  alt={item.text}
                />
              ) : null}
            </div>
            <div className="absolute top-44 ms-auto inset-x-1/4">
              <p className="text-white text-4xl font-inter font-bold">
                {parseInt(item.id) === slideIndex ? item.text : null}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {sliderData.map((dot, index) => (
          <div className="mr-4" key={dot.id}>
            <div
              className={
                index === slideIndex
                  ? "bg-green-300 rounded-full p-4 cursor-pointer"
                  : "bg-white rounded-full p-4 cursor-pointer"
              }
              onClick={() => dispatch(dotSlide(index))}
            ></div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-[50%] right-4 p-2 bg-white rounded-full hover:bg-green-300"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#383960"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-[50%] left-4 p-2 bg-white rounded-full hover:bg-green-300"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#383960"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
