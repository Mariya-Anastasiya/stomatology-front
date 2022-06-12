import store from "@/store/store";
import {updateNoteInRedux} from "@/store/creators/creatorForNote";
import {getInfoOfProduct} from "@/helpers/product.helper";
import {updateNoteById} from "@/requests/note.request";

export const updateNote = (id: number, access_token: string) => {
    const {fio, phone, productId, propertyId, productName, propertyName} = getInfoOfProduct("update");

    if (fio.trim() == "" || phone.trim() == "" || productId == -1) {
        return;
    }

    updateNoteById(id, access_token, {
        numberPhone: phone,
        fullName: fio,
        productId: productId,
        propertyId: propertyId,
        date: new Date()

    });

    store.dispatch(
        updateNoteInRedux(
            id,
            access_token,
            productName,
            propertyName,
            {
                fullName: fio,
                numberPhone: phone,
                productId: productId,
                propertyId: propertyId,
                date: new Date()
            }
        )
    );
};
