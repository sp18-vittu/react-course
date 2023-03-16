import { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Link } from "react-router-dom";
import "./body.css";
import {
  SWIGGY_API_URL,
  locationLatitude,
  locationLongitude,
} from "../../constants";
import Shimmer from "../Shimmer/Shimmer";
import Error from "../Error/Error";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  async function getRestaurantsFromAPI(lat, long) {
    try {
      const data = await fetch(SWIGGY_API_URL(lat, long));
      const json = await data.json();
      const allRestaurantsCards = json?.data?.cards.filter(
        (el) => el.cardType === "seeAllRestaurants"
      )[0]?.data?.data?.cards;
      setAllRestaurants(allRestaurantsCards);
      setFilteredRestaurants(allRestaurantsCards);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getRestaurantsFromAPI(locationLatitude, locationLongitude);
  }, []);

  const debounce = function (fn, delay) {
    let timer;
    return function (...filterArgs) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...filterArgs), delay);
    };
  };

  const filterData = (searchedText, searchLocation) => {
    setFilteredRestaurants(
      searchLocation.filter((restaurant) =>
        restaurant?.data?.name
          ?.toLowerCase()
          ?.includes(searchedText?.toLowerCase())
      )
    );
  };

  const debouncedSearch = debounce(filterData, 100);

  const SearchedRestaurantNotFound = ({ searchedText }) => {
    return (
      <h3 style={{ height: "63vh" }}>
        {`Sorry, we couldn't find any restaurant named " ` +
          (searchedText.length > 13
            ? `${searchedText.slice(0, 8)}....${searchedText.slice(
                searchedText.length - 5
              )}"`
            : `${searchedText} "`)}
      </h3>
    );
  };
  if (!allRestaurants) return null;
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
          onKeyUp={() => debouncedSearch(searchText, allRestaurants)}
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
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.length === 0 ? (
            <SearchedRestaurantNotFound searchedText={searchText} />
          ) : (
            filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.uuid}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </>
  );
}

export default Body;
