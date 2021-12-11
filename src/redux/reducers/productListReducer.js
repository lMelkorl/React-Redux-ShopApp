import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function productList(state=initialState.currentCategory.products,action){
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}