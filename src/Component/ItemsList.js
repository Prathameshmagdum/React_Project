import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemsList = ({items}) =>{
    // console.log("items",items);
    const dispatch = useDispatch();

    const handleAddToCart = () =>{
        dispatch(addItem("Pizza"));
    }
    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>       
                        <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span> 
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute ">
                            <button className="bg-black text-white rounded-lg shadow-lg p-1 mx-1 bottom-8"
                                //Difference between the following function references and function calls work
                                // onClick={handleAddToCart } --> Good way cause it will call the function only when the button is clicked
                                onClick = {()=>handleAddToCart(item)} // --> If we have to pass the reference it's good way, cause it will call the function only when the button is clicked 
                                // onClick = {handleAddToCart(item)} --> Bad way cause it will call the function immediately after component renders
                            >
                                Add +
                            </button>
                        </div>
                        <img src={CDN_URL+item.card.info.imageId} />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemsList;