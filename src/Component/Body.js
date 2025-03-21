import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return(
            <h1>
                Your'e offline make sure you intenrt is On!!
            </h1>
        );
    return restaurantList.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="flex">
                <div className="p-4 m-4">
                    <input
                     type="text"
                     className="border border-solid border-black"
                     value={searchText}
                     onChange={(e)=>{
                        setSearchText(e.target.value);
                     }}
                    />
                    <button className="bg-green-200 px-4 py-2 m-2 rounded-lg"
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
                <div className="m-2 p-2 flex items-center">
                    <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={()=>{
                        const filterRes = restaurantList.filter((res)=>res?.avgRating>4.3);
                        setFilteredRestaurant(filterRes);
                    }}>
                        Top Restaurant
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
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