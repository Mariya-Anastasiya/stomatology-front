import { getProduct } from "@/requests/product.request";
import { setPrice, setProductPrice, setProperties, setPropertiesExists } from "@/store/creators/creatorForCalculator";
import store from "@/store/store";
import {ChangeEventHandler} from "react";


export const onSelectProduct: ChangeEventHandler<HTMLSelectElement> = async (e) => {

    const productId = Number(e.target.value);
    store.dispatch(setProductPrice(0));
    store.dispatch(setPrice(0));

    if (productId == -1) {
        return;
    }

    const product = await getProduct(productId);
    store.dispatch(setProductPrice(product.minPrice));

    if (product.property.length != 0) {
        store.dispatch(setPropertiesExists(true));
        store.dispatch(setProperties(product.property));

    } else {
        store.dispatch(setPropertiesExists(false));
    }
};


export const getInfoOfProduct = (id: string) => {
    const fio = (document.getElementById(id + "entityFio") as HTMLInputElement)?.value;
    const phone = (document.getElementById(id + "entityPhone") as HTMLInputElement)?.value;
    const product = document.getElementById(id + "entityProduct") as HTMLSelectElement;
    const subProduct = document.getElementById(id + "entitySubProduct") as HTMLSelectElement;

    const el = document.getElementById(id + "entityFio") as HTMLInputElement;

    const productId = Number(product?.value);
    const productName = getText(id + "entityProduct", productId);
    const propertyId = Number(subProduct?.value);
    const propertyName = getText(id + "entitySubProduct", propertyId);

    return  {
        fio: fio,
        phone,
        productId,
        propertyId,
        productName,
        propertyName
    };

};

const getText = (htmlId: string, value: number) : string => {
    let text = "";
    (document.getElementById(htmlId) as HTMLSelectElement)
        .childNodes.forEach(it => {
            const element = (it as HTMLSelectElement);
            if (Number(element?.value) === value) {
                text = element.innerHTML;
            }
        });
    return text;
};
