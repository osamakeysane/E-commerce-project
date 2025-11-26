import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // ✅ type-only import
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
  totalPrice?: number;
}
interface CartState {
  products: Product[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);

      if (itemIndex) {
        // Product already in cart, increment quantity and total price
        itemIndex.quantity! += 1;
        itemIndex.totalPrice! += newItem.price;
      } else {
        // Product not in cart, add it
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      // Update overall cart totals
      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
