import {SET_PRICE, SET_PRODUCT_PRICE, SET_PROPERTIES, SET_PROPERTIES_EXISTS} from "@/store/actions/action";
import {ActionType} from "@/store/actions/actionType";

const defaultState = {
    productPrice: 0,
    price: 0,
    isPropertiesExists: false,
    properties: []
};

const reduce = (state = defaultState, action: ActionType) => {
    switch (action.type) {
    case SET_PRODUCT_PRICE:
        return {
            ...state,
            productPrice: action.payload
        };
    case SET_PRICE:
        return {
            ...state,
            price: action.payload
        };
    case SET_PROPERTIES_EXISTS:
        return {
            ...state,
            isPropertiesExists: action.payload
        };
    case SET_PROPERTIES:
        return {
            ...state,
            properties: action.payload
        };

    default:
        return state;
    }
};

export default reduce;
