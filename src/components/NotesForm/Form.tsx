import React, { useEffect, useState } from "react";
import { onSelectProduct } from "@/helpers/product.helper";
import { onSelectProperty } from "@/helpers/property.helper";
import {useAppDispatch, useAppSelector} from "@/hooks";
import { getProducts, Product } from "@/requests/product.request";
import "./Form.scss";
import {getProperties, Property} from "@/requests/property.request";
import {NoteDto} from "@/requests/note.request";
import {setProperties} from "@/store/creators/creatorForCalculator";

export interface NoteFormDto extends NoteDto {
    productId: number,
    propertyId: number
}

interface NotesFormProps {
    id: string,
    note?: NoteFormDto
}

export default function Form({ id, note }: NotesFormProps)  {
    const [products, setProducts] = useState([] as Product[]);
    const properties: Property[] = useAppSelector(state => state.calculator.properties);
    const price = useAppSelector(state => state.calculator.price);
    const productPrice = useAppSelector(state => state.calculator.productPrice);
    const dispatch = useAppDispatch();
    const [a, setA] = useState(true);



    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products);
        });
    }, []);


    const productComponents = products
        .map((product) => {
            if (product.id === note?.productId && a) {
                setA(false);
                dispatch(setProperties(product.property));

            }
            return (
                    <option key={`product${product.id}`}
                            value={product.id}
                            selected={note?.productId == product.id}>{product.name}</option>
            );
        });
    const propertyComponent = properties.map(property => {
        return (
                <option key={`property${property.id}`}
                        value={property.id}
                        selected={note?.propertyName == property.name}>{property.name}</option>
        );
    });

    return (
        <div className='form d-flex justify-content-center align-items-center flex-column text-center'>
            <input className="form-control m-3 form-send__input p-3" defaultValue={note?.fullName} type="text" name="name"
                id={id + "entityFio"} required placeholder="Ваше ФИО:"/>
            <input className="form-control m-3 form-send__input p-3" defaultValue={note?.numberPhone} type="tel" name="tel"
                id={id + "entityPhone"} required placeholder="Ваш телефон:"/>
            <select className="form-select m-3 form-select-sm form-send__input p-3" defaultValue="" required
                id={id + "entityProduct"} onChange={onSelectProduct}>
                <option value={-1} selected>Выберите услугу</option>
                {productComponents}
            </select>

            <select className="form-select m-3 form-select-sm form-send__input p-3" defaultValue="" required
                id={id + "entitySubProduct"} onChange={onSelectProperty}>
                <option value={-1} selected>Выберите подуслугу</option>
                {propertyComponent}
            </select>

            <div className="text-muted">Цена: {Number(price) + Number(productPrice)} руб.</div>
        </div>
    );
}
