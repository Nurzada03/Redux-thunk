import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./basket/basketReduser";
import { mealsReducer } from "./meals/mealsReduser";


const rootReducer = combineReducers({
  meals: mealsReducer,
  basket: basketReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
