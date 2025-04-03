import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductAndAddToCart = createAsyncThunk(
    "cart/fetchProductAndAddToCart",
    async (productId, thunkAPI) => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          // You can handle errors or reject the promise here if needed
          throw new Error("Failed to fetch product");
        }
        const product = await response.json();
        return product; // The full product object is returned
      }
)
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    // logic to delete an item by its ID
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state, action) {
      state.cart = [];
    },
    getTotalCartQuantity(state,action){
      return state.cart.length;
    },
   
  },
  extraReducers:(builder) => {
    builder.addCase(fetchProductAndAddToCart.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    });
  }
});

export const { addToCart, deleteItem, clearCart , getTotalCartQuantity , getTotalCartPrice } = cartSlice.actions;
export const selectTotalCartPrice = (state) =>
  state.cart.cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  
export default cartSlice.reducer;
