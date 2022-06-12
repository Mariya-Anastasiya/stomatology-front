import React from "react";
import Button from "@components/Button/Button";
import {createNote, RequestNoteDto} from "@/requests/note.request";
import Form from "@components/NotesForm/Form";
import {getInfoOfProduct} from "@/helpers/product.helper";
import validateFormHelper from "@/helpers/validateForm.helper";
import {createNoteInRedux} from "@/store/creators/creatorForNote";
import {useAppDispatch} from "@/hooks";

interface NotesProps {
    to: string
}


function NotesForm(props: NotesProps) {
    const dispatch = useAppDispatch();

    const createNoteById = () => {

        const {fio, phone, productId, propertyId, propertyName, productName} = getInfoOfProduct("create");

        const note: RequestNoteDto = {
            fullName: fio,
            numberPhone: phone,
            productId: productId,
            propertyId: propertyId,
            date: new Date()
        };
        createNote({
            fullName: fio,
            numberPhone: phone,
            productId: productId,
            propertyId: propertyId,
            date: new Date()
        });
        dispatch(createNoteInRedux({
            id: 0,
            ...note,
            propertyName,
            productName
        }));


    };


    return (
        <div className="form-send">
            <div className="container d-flex justify-content-start aling-items-center">
                <div className="row">
                    <div className="col-12 col-md-8 mx-auto">
                        <form className="form d-flex justify-content-center align-items-center flex-column text-center">
                            <h2 className="display-5 fw-bold m-3">Запись на прием</h2>
                            <div className="m-3 eurodent-text-secondary">Наши врачи всегда остаются с Вами на связи и
    готовы оказать помощь - Вы можете воспользоваться услугой удалённой консультации.
                            </div>
                            <Form id="create"/>
                            <Button onClick={(e) => {
                                if (!validateFormHelper("create", true, createNoteById)) {
                                    e.preventDefault();
                                }
                            }}
                            to={props.to} value="Сделать запись"
                            color="turquoise"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotesForm;
