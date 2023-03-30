import { SWIGGY_CARDS_API_URL } from "../constants";
export const debounce = (func, delay = 300) => {
  let timer;
  return (...filterArgs) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, filterArgs), delay);
  };
};

export const filterRestaurantData = (
  searchedText,
  searchLocation,
  setFilteredRestaurants
) => {
  setFilteredRestaurants(
    searchLocation.filter((restaurant) =>
      restaurant?.data?.name
        ?.toLowerCase()
        ?.includes(searchedText?.toLowerCase())
    )
  );
};

export async function getRestaurantsFromAPI(
  lat,
  long,
  setAllRestaurants,
  setFilteredRestaurants
) {
  try {
    const data = await fetch(SWIGGY_CARDS_API_URL(lat, long));
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
