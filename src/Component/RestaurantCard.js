import React from "react";

import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = resData?.card?.card?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src={CDN_URL+ cloudinaryImageId}
            />
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Ratings: {avgRating} Stars</h4>
            <h4>Cost: {costForTwo}</h4>
            <h4>Delivery Time: {deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;