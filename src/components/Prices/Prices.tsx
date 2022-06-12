import React from "react";
import {getProducts} from "@/requests/product.request";
import Cards from "@components/Card/Cards";

export default function Prices() {
    return (
        <Cards
            minSizeCard={250}
            getItems={getProducts}
            id="price"
            title="Услуги и цены"
            subTitle="Мы предоставляем максимально широкий спектр услуг для того, чтобы наши пациенты могли наслаждаться жизнью, не стесняясь демонстрировать свою красивую улыбку"
        />
    );
}
