import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () =>{
    const [restaurantList, setRestaurantList] = useState(resList);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
        const json = await data.json();
        console.log(json);
        // setRestaurantList();
    }

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