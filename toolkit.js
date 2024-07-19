import toolkit from "@reduxjs/toolkit"
import { act } from "react";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");

const loginReducer =  createReducer({status: false}, (builder) => {
    builder.addCase(login, (state,action) => {
        state.status = true
    })
})

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer
  },
});

store.subscribe(() => {
  console.log("onchange", store.getState());
});

store.dispatch(addToCart({ id: 2, qty: 20 }));
store.dispatch(login())