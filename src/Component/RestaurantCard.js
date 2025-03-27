import React from "react";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "./UserContext";

const RestaurantCard = (props) => {
    const {loggedIn} = useContext(UserContext);
    const { resData } = props;
    // console.log(props);
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
        <div className="m-4 p-4 w-[280px] bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md">
            <img
                className="rounded-lg w-[250px] h-[250px]"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h4 className="text-clip font-bold text-xl">{name}</h4>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>Ratings: {avgRating} Stars</h4>
            <h4>Cost: {costForTwo}</h4>
            <h4>Delivery Time: {sla?.slaString}</h4>
            <h4>userName: {loggedIn}</h4>
        </div>
    );
};

export const withPromotedCard = (RestaurantCard)=>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-gray-700 text-white rounded-lg p-2 m-2 ">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;
