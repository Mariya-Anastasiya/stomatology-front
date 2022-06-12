import axios from "axios";
import config from "@/config";

export interface Product {
    id: number,
    articleNumber: string,
    name: string,
    description: string,
    minPrice: number,
    property: []
}


export const getProducts = async (): Promise<Product[]> => {
    const request = await axios.get(`${config.url}/products`);

    const products = [];

    for (let i = 0; i < request.data.length; i++) {
        const product = request.data[i];

        const productRequest = await axios.get(`${config.url}/products/${product.id}`);

        products.push(productRequest.data);
    }

    return products;
};

export const getProduct = async (id: number): Promise<Product> => {
    return (await axios.get(`${config.url}/products/${id}`)).data;
};
