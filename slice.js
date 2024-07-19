import toolkit, { createSlice } from "@reduxjs/toolkit";
const { configureStore, createAction, createReducer } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

store.subscribe(() => {
  console.log("onchange", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 }));
