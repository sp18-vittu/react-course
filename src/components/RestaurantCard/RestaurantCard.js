import "./restaurantCard.css";
import { CARD_IMG_CDN_URL } from "../../constants";
function RestaurantCard({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) {
  return (
    <div className="card">
      <img
        className="restaurant-img"
        src={CARD_IMG_CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <div className="card-info">
        <h5>{avgRating}</h5>
        <h5>{lastMileTravelString}</h5>
        <h5>{costForTwoString}</h5>
      </div>
    </div>
  );
}

export default RestaurantCard;
