import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { weather } from "./reducers/getWeatherReducer";


const rootReducer = combineReducers({
    weather : weather,

});

export const store = createStore(rootReducer, compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))