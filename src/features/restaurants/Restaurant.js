import React from "react";
import { restaurantRemoved } from './restaurantsSlice';
import { useDispatch } from "react-redux";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ restaurant }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(restaurantRemoved(restaurant.id));
  }

  return (
    <li>
      {restaurant.name}
      <button onClick={handleClick}> Delete Restaurant </button>
      <ReviewsContainer restaurantId={restaurant.id} />
    </li>
  );
}

export default Restaurant;
