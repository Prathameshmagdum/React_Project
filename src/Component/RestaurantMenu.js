import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu =() =>{
    const [resInfo, setResInfo] = useState("");
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=5934&catalog_qa=undefined&query=Burger&submitAction=ENTER")
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    return (resInfo === null)?<Shimmer/> :(
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
                <li>
                    Burger
                </li>
                <li>
                    Fries
                </li>
                <li>
                    Coke
                </li>
            </ul>
        </div>
    );
}

export default ResturantMenu;