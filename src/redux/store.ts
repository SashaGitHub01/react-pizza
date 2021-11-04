import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import homeReducer from "./reducers/home";

const rootReducer = combineReducers({
   homePage: homeReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
);

export default store;