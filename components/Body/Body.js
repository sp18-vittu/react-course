import restaurantList from "../../data/restaurant";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./body.css";


function Body(){
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data.data} />;
        })}
      </div>
    );
  };

export default Body;