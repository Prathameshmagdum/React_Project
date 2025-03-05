import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const ResturantMenu =() =>{
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    if(resInfo === null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log("item",itemCards);

    return (
        <div>
            <h1>
                {name}
            </h1>
            <p>
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
            <h1>
                Menu
            </h1>
            <ul>
                {itemCards.map((item) => (
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ResturantMenu;