import {isNumberPhone, isRussianLetters} from "@/helpers/regex.helper";

export default (id: string, clearInputs = false, callbackfn = () => {}): boolean => {
    const fio = document.getElementById(`${id}entityFio`) as HTMLInputElement;
    const phone = document.getElementById(`${id}entityPhone`) as HTMLInputElement;
    const product = document.getElementById(`${id}entityProduct`) as HTMLOptionElement;
    const subProduct = document.getElementById(`${id}entitySubProduct`) as HTMLOptionElement;
    fio?.classList.remove("border-danger");
    phone?.classList.remove("border-danger");
    product?.classList.remove("border-danger");
    subProduct?.classList.remove("border-danger");
    const name = fio?.value.trim();
    const phoneNumber = phone?.value.trim();
    if (name == "" || !isRussianLetters(name)) {
        fio?.classList.add("border-danger");
        return false;
    }

    if (!isNumberPhone(phoneNumber)) {
        phone?.classList.add("border-danger");
        return false;
    }

    if (product?.value == "-1") {
        product?.classList.add("border-danger");
        return false;
    }

    if (subProduct?.value == "-1") {
        subProduct?.classList.add("border-danger");
        return false;
    }

    callbackfn();

    if(clearInputs) {
        fio ? fio.value = "" : null;
        phone ? phone.value = "" : null;
        product ? product.value = "-1" : null;
        subProduct ? subProduct.value = "-1" : null;
    }

    return true;
};
