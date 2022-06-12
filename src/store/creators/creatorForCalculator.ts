import {SET_PRICE, SET_PRODUCT_PRICE, SET_PROPERTIES, SET_PROPERTIES_EXISTS} from "@/store/actions/action";
import {Property} from "@/requests/property.request";

export const setProductPrice = (productPrice: number) => {
    return {
        type: SET_PRODUCT_PRICE,
        payload: productPrice
    };
};

export const setPrice = (price: number) => {
    return {
        type: SET_PRICE,
        payload: price
    };
};

export const setPropertiesExists = (propertiesExists: boolean) => {
    return {
        type: SET_PROPERTIES_EXISTS,
        payload: propertiesExists
    };
};

export const setProperties = (properties: Property[]) => {
    return {
        type: SET_PROPERTIES,
        payload: properties
    };
};

