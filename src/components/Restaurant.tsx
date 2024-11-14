import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";

const Restaurant = () => {
  return (
    <div className="restaurn-container">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.info.id}
          image_url={restaurant.info.cloudinaryImageId}
          timeing={restaurant.info.sla.slaString}
          title={restaurant.info.name}
          cuisines={restaurant.info.cuisines.join(", ")}
          header={restaurant.info.aggregatedDiscountInfoV3?.header}
          rating={restaurant.info.avgRating}
          subHeader={restaurant.info.aggregatedDiscountInfoV3?.subHeader}
          areaName={restaurant.info.areaName}
        />
      ))}
    </div>
  );
};

export default Restaurant;
