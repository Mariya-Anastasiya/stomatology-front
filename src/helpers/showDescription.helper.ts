import store from "@/store/store";
import {decreaseCount, increaseCount} from "@/store/creators/creatorForCount";

export default (descriptionId: string, buttonId: string, miniDescription: string, fullDescription: string, priceListId?: string) => {
    const description = document.getElementById(descriptionId) as HTMLDivElement;
    const button = document.getElementById(buttonId) as HTMLInputElement;
    const priceList = (document.getElementById(priceListId as string)) as HTMLUListElement;

    if(description.classList.contains("full-description")) {
        description.classList.remove("full-description");
        description.innerText = miniDescription + "...";
        priceList?.classList.add("d-none");
        button.innerHTML = "Подробнее";

        store.dispatch(increaseCount());
    } else {
        description.classList.add("full-description");
        description.innerText = fullDescription;
        priceList?.classList.remove("d-none");
        button.innerHTML = "Скрыть";
        store.dispatch(decreaseCount());
    }
};
