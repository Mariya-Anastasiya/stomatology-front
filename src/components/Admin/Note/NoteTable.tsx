import React, {useEffect} from "react";
import {getNotes} from "@/requests/note.request";
import Note from "@components/Admin/Note/Note";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {NoteDto} from "@/requests/note.request";
import {setNotes} from "@/store/creators/creatorForNote";

export default function NoteTable() {
    const notes: NoteDto[] = useAppSelector(state => state.noteStore.notes);
    const dispatch = useAppDispatch();
    useEffect(() => {
        getNotes().then((notes: NoteDto[]) => {
            notes.sort((a, b) => a.id - b.id);
            dispatch(setNotes(notes));
        });
    }, []);
    const noteElements = notes.map((note: NoteDto) => {
        return (
            <Note
                key={note.id}
                id={note.id}
                productName={note.productName}
                propertyName={note.propertyName}
                numberPhone={note.numberPhone}
                fullName={note.fullName}
                date={note.date}
            />
        );
    });
    return (
        <table className="table mb-4">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Запись</th>
                    <th>ФИО</th>
                    <th>Дата</th>
                    <th>Номер телефона</th>
                    <th className="flex justify-content-center">
                        <div className="m-md-0">
                            Действия
                        </div>

                    </th>
                </tr>
            </thead>
            <tbody>
                { noteElements }
            </tbody>
        </table>
    );
}
