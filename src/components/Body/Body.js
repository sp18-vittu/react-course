import { useState } from "react";
import { restaurantList } from "../../constants";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./body.css";

const debounce = function (fn, delay) {
  let timer;
  return function (...filterArgs) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...filterArgs), delay);
  };
};

function Body() {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  const filterData = (searchedText, searchLocation) => {
    setRestaurants(
      searchLocation.filter((restaurant) =>
        restaurant.data.data.name
          .toLowerCase()
          .includes(searchedText.toLowerCase())
      )
    );
  };

  const betterSearchFunction = debounce(filterData, 400);

  const NotFound = ({ searchedText }) => {
    return (
      <h3>Sorry, we couldn't find any restaurant named "{searchedText}" </h3>
    );
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyUp={() => betterSearchFunction(searchText, restaurantList)}
        />
        <button
          className="search-btn"
          // onClick={() => {
          //   // filter the data
          //   const data = filterData(searchText, restaurants);
          //   // update the restaurants list in the ui
          //   setRestaurants(data);
          // }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.length === 0 ? (
          <NotFound searchedText={searchText} />
        ) : (
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.data.data.uuid}
                {...restaurant.data.data}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default Body;