import React from "react";
import StarRatingComponent from "react-star-rating-component";

const Filter = ({ keyrate, setKeyrate, search }) => {
  const onStarClick = (nextValue) => {
    setKeyrate(nextValue);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={(e) => search(e.target.value)}
      />
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={keyrate}
        onStarClick={onStarClick}
        starColor={"red"}
        emptyStarColor={"white"}
      />
    </div>
  );
};

export default Filter;
