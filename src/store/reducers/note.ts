import {CREATE_NOTE, DELETE_NOTE, SELECT_NOTE, SET_MAX_INDEX, SET_NOTES, UPDATE_NOTE} from "@/store/actions/action";
import { RequestNoteDto, deleteNoteById, NoteDto } from "@/requests/note.request";
import {ActionType} from "@/store/actions/actionType";

const defaultState = {
    notes: [] as NoteDto[],
    selectedNode: {} as NoteDto,
    maxIndex: 0 as number
};

const deleteNote = (notes: NoteDto[], id: number, token: string) => {
    deleteNoteById(id, token);

    const newNotes: NoteDto[] = [];

    notes.forEach(note => {
        if (note.id !== id) {
            newNotes.push(note);
        }
    });
    return newNotes;
};

const updateNoteById = (notes: NoteDto[], id: number, token: string, productName: string, propertyName: string, dto: RequestNoteDto) => {

    const newNotes: NoteDto[] = [];

    notes.forEach(note => {
        if (note.id === id) {
            newNotes.push({
                fullName: dto.fullName,
                id: id,
                numberPhone: dto.numberPhone,
                productName: productName,
                propertyName: propertyName,
                date: dto.date
            });
        } else {
            newNotes.push(note);
        }
    });
    return newNotes;
};

const createNote = (notes: NoteDto[], dto: NoteDto) => {
    const newNotes = [...notes];
    const note = dto;
    note.id = notes[notes.length - 1].id + 1;
    newNotes.push(note);
    return newNotes;
};


const reduce = (state= defaultState, action: ActionType) => {
    switch (action.type) {
    case DELETE_NOTE:
        return {
            ...state,
            notes: deleteNote(state.notes, action.payload.id, action.payload.token)
        };
    case SET_NOTES:
        return {
            ...state,
            notes: action.payload
        };
    case SELECT_NOTE:
        return {
            ...state,
            selectedNode: (() => {
                let selectedNote = {} as NoteDto;

                state.notes.forEach((note) => {
                    // @ts-ignore
                    if(action.payload as number == note.id) {
                        selectedNote = note;
                    }
                });

                return selectedNote;
            })()
        };
    case CREATE_NOTE:

        return {
            ...state,
            notes: createNote(state.notes, action.payload),

        };
    case UPDATE_NOTE:
        return {
            ...state,
            notes: updateNoteById(
                state.notes,
                action.payload.id,
                action.payload.token,
                action.payload.productName,
                action.payload.propertyName,
                action.payload.dto
            )
        };
    default: return state;
    }
};

export default reduce;
