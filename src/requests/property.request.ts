import axios from "axios";
import config from "@/config";

export interface Property {
    id: number,
    name: string,
    price: number
}

export const getProperty = async (id: number): Promise<Property | null> => {
    if (id == -1) {
        return null;
    }

    return (await axios.get(`${config.url}/properties/${id}`)).data;
};

export const getProperties = async (id: number) => {
    return (await axios.get(`${config.url}/properties/?idProduct=${id}`)).data;
};
