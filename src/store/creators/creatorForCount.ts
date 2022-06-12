import {ActionType} from "@/store/actions/actionType";
import {DECREASE, INCREASE, SET_COUNT} from "@/store/actions/action";

export const increaseCount = () : ActionType => {
    return {
        type: INCREASE
    };
};

export const decreaseCount = () : ActionType => {
    return {
        type: DECREASE
    };
};

export const setCount = (count: number) : ActionType => {
    return {
        type: SET_COUNT,
        payload: count
    };
};
