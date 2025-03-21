import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestaurantMenu";

const ResturantMenu =() =>{
    // const [resInfo, setResInfo] = useState(null);
    const {resId}  = useParams();
    // console.log(resId);

    const resInfo = useRestuarantMenu(resId);

    if(resInfo === null) return <Shimmer/>;
    const restaurantInfo = resInfo?.cards?.find(card => card?.card?.card?.info);
    const { name, cuisines, costForTwoMessage } = restaurantInfo?.card?.card?.info || {};

    // Extract menu items safely
    const regularMenu = resInfo?.cards?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR);
    const menuItems = regularMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    // console.log("item",itemCards);
    const itemCards = menuItems.find(card => card?.card?.card?.itemCards)?.card?.card?.itemCards || [];


    return (
        <div className="">
            <h1 className="font-bold text-xl m-2 p-2">
                {name}
            </h1>
            <p className="m-2 p-2">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
            <h1 className="font-bold text-xl m-2 px-2">
                Menu
            </h1>
            <ul className="m-5 p-5 list-decimal">
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