import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { weather } from "./reducers/getWeatherReducer";
import { Form as formReducer } from "react-final-form";

const rootReducer = combineReducers({
    weather : weather,
    form: formReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);