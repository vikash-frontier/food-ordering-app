import React from "react";
import { IMAGE_URL } from "../utils/constant";
import { greenStar } from "../assets/images";

const RestaurantCard = (props) => {
  const {
    image_url,
    title,
    rating,
    timeing,
    cuisines,
    header,
    subHeader,
    areaName,
  } = props;
  return (
    <div className="restaurent-card ">
      <div className=" relative">
        <img
          src={IMAGE_URL + image_url}
          alt="Shree Naivedyam"
          className=" rounded-3xl w-full h-[182px] object-cover"
        />{" "}
        <div className="overlay_card rounded-b-3xl ">
          {header && subHeader && (
            <span
              style={{ color: "rgba(255, 255, 255, 0.92)" }}
              className=" font-bold font-inter text-[22px] overflow-hidden  whitespace-nowrap text-ellipsis  -tracking-[0.5px]"
            >
              {header + " " + subHeader}
            </span>
          )}
        </div>
      </div>

      <div className=" ml-4">
        <h2 className=" font-gilroy font-bold text-[18px] text-black-2">
          {title}
        </h2>
        <div className=" flex items-center gap-x-1 font-gilroy text-black-2">
          <div className=" flex items-center gap-x-1 ">
            <img
              src={greenStar}
              alt="star"
              className=" w-[18px] h-[18px] object-cover"
            />
            <p>{rating}</p>
          </div>
          <div className=" bg-black-2 h-1 w-1 rounded-full"></div>
          <p>{timeing}</p>
        </div>
        <p className=" font-gilroy font-extralight  text-gray-2 overflow-hidden whitespace-nowrap text-ellipsis max-w-[220px]">
          {cuisines}
        </p>
        <p className=" font-gilroy font-extralight  text-gray-2 overflow-hidden whitespace-nowrap text-ellipsis max-w-[220px]">
          {areaName}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
