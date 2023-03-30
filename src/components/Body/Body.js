import { useState, useEffect, useContext } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Link } from "react-router-dom";
import "./body.css";
import { locationLatitude, locationLongitude } from "../../constants";
import Shimmer from "../Shimmer/Shimmer";
import UserContext from "../../utils/UserContext";
import {
  debounce,
  getRestaurantsFromAPI,
  filterRestaurantData,
} from "../../utils/helper";
import SearchedRestaurantNotFound from "../SearchedRestaurantNotFound/SearchedRestaurantNotFound";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurantsFromAPI(
      locationLatitude,
      locationLongitude,
      setAllRestaurants,
      setFilteredRestaurants
    );
  }, []);

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
          onKeyUp={() =>
            debounce(filterRestaurantData)(
              searchText,
              allRestaurants,
              setFilteredRestaurants
            )
          }
        />
        <input
          style={{
            padding: "15px",
            margin: "30px 10px 0px",
            borderRadius: "5px",
            border: "1px solid #aabcca",
          }}
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          style={{
            padding: "15px",
            margin: "30px 10px 0px",
            borderRadius: "5px",
            border: "1px solid #aabcca",
          }}
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
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
