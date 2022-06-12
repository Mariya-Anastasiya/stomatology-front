import axios from "axios";
import config from "@/config";

export interface ResponseCategory {
    id: number,
    name: string,
    description: string
}

export const getCategories = async (): Promise<ResponseCategory[]> => {
    const request = await axios.get(`${config.url}/categories`);
    return request.data;
};
