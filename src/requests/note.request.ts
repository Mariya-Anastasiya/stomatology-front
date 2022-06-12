import axios from "axios";
import config from "@/config";
import { getProduct } from "@/requests/product.request";
import { getProperty } from "@/requests/property.request";

export interface BaseNoteDto {
    fullName: string,
    numberPhone: string,
}

export interface RequestNoteDto extends BaseNoteDto {
    productId: number,
    propertyId: number,
    date: Date
}

export interface NoteDto extends BaseNoteDto {
    id: number,
    productName: string,
    propertyName: string
    date: Date
}


export const deleteNoteById = async (id: number, token: string) => {
    return await axios.delete(`${config.url}/notes/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });
};


export const getNotes = async () : Promise<NoteDto[]> => {
    const data = (await axios.get(`${config.url}/notes`)).data;
    const arr: NoteDto[] = [];

    for (let i = 0; i < data.length; i++) {
        const productId = data[i].productId;
        const propertyId = data[i].propertyId;

        const product = await getProduct(productId);
        const property = await getProperty(propertyId);
        arr.push({
            ...data[i],
            productName: product.name,
            propertyName: property?.name,
        });
    }

    return arr;
};

export const getNote = async (id: number) => {
    return (await axios.get(`${config.url}/notes/${id}`)).data;
};

export const createNote = async (dto: RequestNoteDto) => {
    return await axios.post(`${config.url}/notes`, {
        ...dto,
        date: dto.date.toDateString()
    });
};


export const updateNoteById = async (id: number, token: string, dto: RequestNoteDto) => {
    return await axios.patch(`${config.url}/notes/${id}`, {
        ...dto,
        date: dto.date.toDateString()
    }, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
};

