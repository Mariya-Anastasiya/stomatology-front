import {CREATE_NOTE, DELETE_NOTE, SELECT_NOTE, SET_MAX_INDEX, SET_NOTES, UPDATE_NOTE} from "@/store/actions/action";
import {NoteDto, RequestNoteDto} from "@/requests/note.request";
import {ActionType} from "@/store/actions/actionType";

export const deleteNote = (id: number, token: string) => {
    return {
        type: DELETE_NOTE,
        payload: {id: id, token: token}
    };
};

export const setNotes = (notes: NoteDto[]) => {
    return {
        type: SET_NOTES,
        payload: notes
    };
};

export const selectedNoteId = (id: number) => {
    return{
        type: SELECT_NOTE,
        payload: id
    };
};

export const updateNoteInRedux = (id: number, token: string,productName: string, propertyName: string, dto: RequestNoteDto) => {
    return {
        type: UPDATE_NOTE,
        payload: {
            id: id,
            token: token,
            productName,
            dto: dto
        }
    };
};

export const createNoteInRedux = (dto: NoteDto) : ActionType => {
    return {
        type: CREATE_NOTE,
        payload: dto
    };
};
