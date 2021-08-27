import { combineReducers } from "redux";
import { authModalsReducer as authModals } from "./authModals/reducer";
import { cartReducer as cart } from "./cart/reducer";
import { authReducer as auth } from "./auth/reducer";

export const reducers = combineReducers({ authModals, cart, auth });
