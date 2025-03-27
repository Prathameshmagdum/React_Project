import React from "react";
import ItemsList from "./ItemsList";
 
 const RestaurantCategory = ({data, showIndex, setShowIndex}) =>{

    // what is uncontrolled component
    // const [showItems, setShowItems] = useState(false);
    // so basically state will be managed by the child component i.e. RestaurantCategory
    // and the parent component i.e. RestaurantMenu will not have any control over the state of the child component
    // so the child component will have its own state and will manage it
    // so the child component is called uncontrolled component
    // so to make the child component controlled component we will pass the state and the function to change the state from the parent component

    // so, now we will pass the setShowIndex function as a prop to the child component and the child component will handle the state for controlled component

    const handleClick = () => {
        // Toggle the accordion open/close
        setShowIndex();
    }
    // console.log(data);
    return (
        <div className="w-6/12 mx-auto p-2 my-4 border-b bg-gray-50 shadow-lg">
            <div 
                className="flex justify-between cursor-pointer"
                onClick={handleClick}
            >
                <span className="font-bold text-sm">{data?.title} ({data.itemCards.length})</span>
                <span>{"⬇️"}</span>
            </div>
            {showIndex && <ItemsList items={data.itemCards}/>}
        </div>
    );
 }
 export default RestaurantCategory;
 