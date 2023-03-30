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
export default SearchedRestaurantNotFound;
