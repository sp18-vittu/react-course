import "./restaurantCard.css";
import { CARD_IMG_CDN_URL } from "../../constants";
import RatingStar from "../../assets/images/starRating.svg";
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
        className="restaurant-card-img"
        src={CARD_IMG_CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <div className="card-info">
        <h5
          className="restaurant-card-rating"
          style={
            avgRating < 4
              ? { backgroundColor: "#ec3838", color: "white" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <img src={RatingStar} alt="star" width={13} />

          {avgRating}
        </h5>
        <h5>{lastMileTravelString}</h5>
        <h5>{costForTwoString}</h5>
      </div>
    </div>
  );
}

export default RestaurantCard;
