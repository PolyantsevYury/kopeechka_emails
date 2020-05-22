import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import tableReducer from "./table-reducer";
import uploadReducer from "./upload-reducer";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    table: tableReducer,
    form: formReducer,
    upload: uploadReducer
});

// const store = createStore(reducers,  applyMiddleware(thunkMiddleware));
// window.__store__ = store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;