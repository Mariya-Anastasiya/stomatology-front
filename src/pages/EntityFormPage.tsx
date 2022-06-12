import NotesForm from "@components/NotesForm/NotesForm";
import React from "react";

export default function EntityFormPage() {
    window.scrollTo(0, 0);
    return (
        <div>
            <NotesForm to='/thanksForNewEntity'/>
        </div>
    );
}
