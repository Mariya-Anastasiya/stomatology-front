import React from "react";
import {NoteDto} from "@/requests/note.request";
import {useAppDispatch} from "@/hooks";
import {deleteNote, selectedNoteId} from "@/store/creators/creatorForNote";

type NoteProps = NoteDto;

const getDataFormat = (date: Date) : string => {
    const newDate = new Date(date);
    return `${formatNull(newDate.getDate())}.${formatNull(newDate.getMonth() + 1)}.${newDate.getFullYear()}`
}

const formatNull = (n: number) : string => n < 10 ? `0${n}` : `${n}`

export default function Note (props: NoteProps) {
    const token = sessionStorage.getItem("access_token") as string;
    const dispatch = useAppDispatch();
    return(
        <tr key={`entity${props.id}`}>
            <th>{props.id}</th>
            <td>
                <div>
                    {  props.productName ? props.productName: ""}
                </div>
                <div>
                    {  props.propertyName? props.propertyName.slice(0, 33): ""}
                </div>
            </td>
            <td>{props.fullName}</td>
            <td>{
                getDataFormat(props.date)
            }</td>
            <td>{props.numberPhone}</td>
            <td>
                <button type="submit"
                    className="mx-1 btn button button-background-turquoise"
                    onClick={() => {
                        dispatch(deleteNote(props.id, token));
                    }}
                >
                    Удалить
                </button>
                <button type="submit" data-bs-toggle="modal" data-bs-target={"#modal"}
                    className="mx-1 btn button button-background-white" onClick={
                        () => dispatch(selectedNoteId(props.id))
                    }>Изменить
                </button>
            </td>
        </tr>
    );
}
