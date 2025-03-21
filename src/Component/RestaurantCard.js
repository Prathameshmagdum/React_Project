import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
console.log(props);
    // if (!resData?.card?.card?.info) {
    //     return <div>Loading...</div>;
    // }

    const {
        cloudinaryImageId ,
        name ,
        cuisines  ,
        avgRating ,
        costForTwo ,
        sla,
    } = resData;

    return (
        <div className="m-4 p-4 w-[280px] bg-gray-100 hover:bg-gray-200">
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h4 className="font-bold text-xl">{name}</h4>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>Ratings: {avgRating} Stars</h4>
            <h4>Cost: {costForTwo}</h4>
            <h4>Delivery Time: {sla?.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;
