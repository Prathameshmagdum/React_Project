import ItemsList from "./ItemsList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
const cartItems = useSelector((store)=> store.cart.items);
const dispatch = useDispatch();

const handleCartOnClick = () =>{
    dispatch(clearCart());
}
    return (
        <div className=" text-center mx-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-1 m-1 bg-black text-white rounded-lg" 
                    onClick={handleCartOnClick}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h1>The Cart is Empty. Please Add Items in the Cart !</h1>}
                <ItemsList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;