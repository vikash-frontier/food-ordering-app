import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";

const Restaurant = () => {
  const [resData, setResData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResData(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onSearchHandler = () => {
    const filteredSearch = resData.filter((data) =>
      data?.info?.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredSearch);
    setSearch("");
  };
  return (
    <div className="mt-[110px] mx-[162px]">
      <div className=" flex justify-between items-center">
        <button
          onClick={() => {
            const filteredData = resData.filter(
              (data) => data?.info?.avgRating > 4.5
            ); // Fixed here
            console.log(filteredData);
            setResData(filteredData);
          }}
          className=" border border-[#4f4f4f] rounded-md px-4 py-1"
        >
          Top Rated
        </button>
        <div className=" flex gap-x-4 items-center">
          <input
            type="text"
            className=" py-1 px-2 outline-none border border-[#4f4f4f] rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={onSearchHandler}
            className=" border border-[#4f4f4f] rounded-md px-4 py-1"
          >
            search
          </button>
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className=" w-full h-[calc(100vh-20rem)] flex justify-center items-center text-2xl text-black-2 font-gilroy font-bold">
          No Data Found
        </div>
      ) : (
        <div className="restaurn-container">
          {filteredData.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.resId}
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
      )}
    </div>
  );
};

export default Restaurant;
