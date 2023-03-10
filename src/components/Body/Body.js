import { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./body.css";
import { SWIGGY_API_URL } from "../../constants";
import Shimmer from "../Shimmer/Shimmer";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  async function getRestaurantsFromAPI() {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    getRestaurantsFromAPI();
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
      <h3>
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
                <RestaurantCard
                  key={restaurant.data.uuid}
                  {...restaurant.data}
                />
              );
            })
          )}
        </div>
      )}
    </>
  );
}

export default Body;
