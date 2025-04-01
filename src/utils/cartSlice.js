import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItem: (state, action)=>{
            // mutating the state here means directly modifying the state object
            // Redux Toolkit uses immer library which allows us to mutate the state directly
            // and it will take care of creating a new immutable state object for us.
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