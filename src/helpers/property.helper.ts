import { setPrice } from "@/store/creators/creatorForCalculator";
import { getProperty } from "@/requests/property.request";
import store from "@/store/store";
import {ChangeEventHandler} from "react";


export const onSelectProperty: ChangeEventHandler<HTMLSelectElement> = async (e) => {
    const propertyId = Number(e.target.value);
    store.dispatch(setPrice(0));

    if (propertyId == -1) {
        return;
    }

    const property = await getProperty(propertyId);
    store.dispatch(setPrice(Number(property?.price || 0)));
};
