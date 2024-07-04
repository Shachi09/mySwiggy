// import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import { queries } from "@testing-library/react";


const Body = () => {

  // Local State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  async function fetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.102815&lng=79.05555&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jData = await data.json();
    //option chaining
    const results = jData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurant(results);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimer />
  }

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          let filterListOfRestaurants = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4
          );
          setListOfRestaurant(filterListOfRestaurants);
        }}>Top Rated restaurants</button>
      </div>
      {/* <div className="user-container">
        <h2>{queries.map()}</h2>
  
</div> */}
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id }>
            <RestaurantCard resData={restaurant} />
          </Link>          
        ))}
      </div>
    </div>
  ); 
};

export default Body;