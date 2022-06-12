import React, {useEffect, useState} from "react";
import NoteTable from "@components/Admin/Note/NoteTable";
import Modal from "@components/Admin/Modal";
import NotesForm from "@components/NotesForm/NotesForm";

export default function Admin() {
    const access_token = sessionStorage.getItem("access_token") as string;
    if (access_token == null) {
        window.location.href = "/";
    }
    return (
        <div className="container">
            <NotesForm to={""}/>
            <NoteTable />
            <Modal />
        </div>
    );
}
