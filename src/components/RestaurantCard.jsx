import React from "react";

const RestaurantCard = () => {
  return (
    <div className="restaurent-card ">
      <img
        className=" rounded-3xl"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2274f59cb8efcfab1f446b195bcbda3b"
        alt="Shree Naivedyam"
      />{" "}
      <div>
        <h2>Meghna Food</h2>
        <p>rating</p>
        <p>cuisine</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
