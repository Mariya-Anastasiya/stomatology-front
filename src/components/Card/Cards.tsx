import React, { useEffect, useState } from "react";
import showDescriptionHelper from "@/helpers/showDescription.helper";
import config from "@/config";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {setCount} from "@/store/creators/creatorForCount";
import {Property} from "@/requests/property.request";
import Card from "@components/Card/Card";

interface CardProps {
    getItems: Function,
    title: string,
    subTitle?: string,
    id: string,
    minSizeCard?: number
}

interface CardInfo {
    fullName: string,
    description: string,
    id: number,
    name: string,
    minPrice: number,
    imageName?: string,
    property?: Property[]
}

export default function Cards(props: CardProps) {
    const [items, setItems] = useState([] as CardInfo[]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        props.getItems().then((items: CardInfo[]) => setItems(items));
        dispatch(setCount(0));
    }, []);

    const components = items.map((item: CardInfo) => {
        return <Card
            minSizeCard={props.minSizeCard}
            key={item.id}
            actionId={props.id}
            description={item.description}
            productId={item.id}
            name={item.name}
            minPrice={item.minPrice}
            imageName={item.imageName}
            property={item.property}
        />;
    });

    return (
        <div className="container my-5">
            <h2 className="text-center eurodent-text-turquoise">
                { props.title }
            </h2>

            <div className="text-muted text-center mb-5">{ props.subTitle ?? "" }</div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {components}
            </div>
        </div>
    );
}
