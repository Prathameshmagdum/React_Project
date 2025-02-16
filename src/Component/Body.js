import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    const [restaurantList, setRestaurantList] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterRes = restaurantList.filter((res)=>res.card.card.info.avgRating>=4);
                    setRestaurantList(filterRes);
                }}>
                    Filter The Top Rating Restaurant
                </button>
            </div>
            <div className="res-container">
                {restaurantList.map((restuarant) => (<RestaurantCard key={restuarant.card.card.info.id} resData={restuarant}/>))}
            </div>
        </div>
    )
}

export default Body;