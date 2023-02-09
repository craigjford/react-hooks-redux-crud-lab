import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants }) {

  const restaurantList = restaurants.map((rest) => {
     return <Restaurant key={rest.id} restaurant={rest} />
  })

  return (
    <ul>
      {restaurantList}
    </ul>
  );
}

export default Restaurants;
