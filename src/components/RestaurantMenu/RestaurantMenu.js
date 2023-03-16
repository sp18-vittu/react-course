import "./restaurantMenu.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CARD_IMG_CDN_URL } from "../../constants";

import { locationLatitude, locationLongitude } from "../../constants.js";
import Shimmer from "../Shimmer/Shimmer";

const RestaurantMenu = () => {
  //   const params = useParams();
  //   const { id } = params;

  //above two lines is equivalent to
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=" +
        locationLatitude +
        "&lng=" +
        locationLongitude +
        "&menuId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant.name === undefined ? (
    <Shimmer />
  ) : (
    <div>
      <h3>Restaurant ID : {resId}</h3>
      <h3>{restaurant?.name}</h3>
      <img
        src={CARD_IMG_CDN_URL + restaurant?.cloudinaryImageId}
        alt="restaurant image"
      />
    </div>
  );
};
export default RestaurantMenu;
