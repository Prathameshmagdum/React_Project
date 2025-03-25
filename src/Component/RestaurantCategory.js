 import React from "react";
import ItemsList from "./ItemsList";
 
 const RestaurantCategory = ({data}) =>{
    console.log(data);
    return (
        <div className="w-6/12 mx-auto p-2 my-4 border-b bg-gray-50 shadow-lg">
            <div className="flex justify-between">
                <span className="font-bold text-sm">{data?.title} ({data.itemCards.length})</span>
                <span>{"⬇️"}</span>
            </div>
            <ItemsList items={data.itemCards}/>
        </div>
    );
 }
 export default RestaurantCategory;