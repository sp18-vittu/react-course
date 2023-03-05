import "./restaurantCard.css";

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
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
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
