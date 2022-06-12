import React from "react";
import Form, {NoteFormDto} from "@components/NotesForm/Form";
import {useAppSelector} from "@/hooks";
import {updateNote} from "@/helpers/note.helper";
import validateFormHelper from "@/helpers/validateForm.helper";

export default function Modal() {
    const access_token = sessionStorage.getItem("access_token") as string;
    const note: NoteFormDto = useAppSelector(state => state.noteStore.selectedNode) as NoteFormDto;

    return (
        <div>
            <div className={"modal fade w-100}"} id="modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content p-5">
                        <div className="modal-header">
                            <h5 className="modal-title text-center">Изменение записи</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <Form id="update" note={note} />
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn button button-background-white"
                                data-bs-dismiss="modal"
                            >
                            Закрыть
                            </button>
                            <button
                                type="button"
                                className="btn button button-background-turquoise"
                                onClick={ () => {
                                    if(validateFormHelper("update")) {
                                        updateNote(note.id, access_token);
                                        setTimeout(() => window.location.reload(), 500);
                                    }
                                }}
                            >
                            Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
