import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers'
const initialState={};
const reducer=combineReducers({
    productList: productListReducer,
    cart: cartReducer
})
const composeEnhancer=window._REDUZ_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
//middleware allows us to run async actions in redux