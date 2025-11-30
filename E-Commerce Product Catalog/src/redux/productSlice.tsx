import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// Define the product type
export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

// Define the slice state type
interface ProductState {
  products: Product[];
  searchTerm: string;
  filteredData: Product[];
}
// Initial state
const initialState: ProductState = {
  products: [],
  searchTerm: "",
  filteredData: [],
};
// Create the slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
