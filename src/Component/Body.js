import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
        const json = await data.json();
        console.log(json);
        const restList = json?.data?.cards
            ?.map((card) => card?.card?.card?.info)
            .filter((info) => info);
        setRestaurantList(restList);
        setFilteredRestaurant(restList);
        // console.log(restList);
    }

    return restaurantList.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                     type="text"
                     className="search-box"
                     value={searchText}
                     onChange={(e)=>{
                        setSearchText(e.target.value);
                     }}
                    />
                    <button className="search-button"
                     onClick={()=>{
                        console.log(searchText);
                        const filterSearchText = restaurantList.filter(
                            (res)=>res?.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filterSearchText);
                     }}
                    >
                    Search
                    </button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filterRes = restaurantList.filter((res)=>res?.avgRating>4.3);
                    setFilteredRestaurant(filterRes);
                }}>
                    Top Restaurant
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restuarant) => (
                    <Link key={restuarant?.id} to={"/restaurant/"+restuarant?.id} className="no-underline">
                        <RestaurantCard  resData={restuarant}/>
                    </Link>
                    ))}
            </div>
        </div>
    )
}

export default Body;