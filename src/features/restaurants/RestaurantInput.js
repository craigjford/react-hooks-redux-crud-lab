import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice" 


function RestaurantInput() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(restaurantAdded(name));
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>  
        <br />
        <br />
        <button type="submit">Add Restaurant</button>
      </form>  
    </div>
  );
}

export default RestaurantInput;
