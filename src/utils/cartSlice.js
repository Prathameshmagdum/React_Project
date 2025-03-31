import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItem: (state, action)=>{
            // mutating the state here means directly modifying the state object
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0;
        },
    },
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;