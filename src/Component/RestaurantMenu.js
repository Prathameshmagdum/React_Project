import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const ResturantMenu =() =>{
    // const [resInfo, setResInfo] = useState(null);
    const {resId}  = useParams();
    // console.log(resId);

    const resInfo = useRestuarantMenu(resId);
    console.log(resInfo);

    if(resInfo === null) return <Shimmer/>;
    const restaurantInfo = resInfo?.cards?.find(card => card?.card?.card?.info);
    const { name, cuisines, costForTwoMessage } = restaurantInfo?.card?.card?.info || {};

    // Extract menu items safely
    const regularMenu = resInfo?.cards?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR);
    const menuItems = regularMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // const itemCards = menuItems.find(card => card?.card?.card?.itemCards)?.card?.card?.itemCards || [];
    // console.log("accordian",menuItems);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("r",categories);
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">
                {name}
            </h1>
            <p className="m-2 p-2 font-bold text-lg">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
            {/* <h1 className="font-bold text-xl m-2 px-2">
                Menu
            </h1>
            <ul className="m-5 p-5 ">
                {itemCards.map((item) => (
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                </li>
                ))}
            </ul> */}
            {categories?.map((category) => (
                <RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card} />
            ))}

        </div>
    );
}

export default ResturantMenu;