import {ActionType} from "@/store/actions/actionType";
import {DECREASE, INCREASE, SET_COUNT} from "@/store/actions/action";

const defaultState = {
    count: 0
};

const reduce = (state = defaultState, action: ActionType) => {
    switch (action.type) {
    case INCREASE:
        return {
            count: state.count + 1
        };
    case DECREASE:
        return {
            count: state.count - 1
        };
    case SET_COUNT:
        return {
            count: action.payload
        };
    default: return state;
    }
};

export default reduce;
