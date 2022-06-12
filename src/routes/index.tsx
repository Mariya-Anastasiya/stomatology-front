import React from "react";

import MainPage from "@/pages/MainPage";
import PricesPage from "@/pages/PricesPage";
import SpecialistsPage from "@/pages/SpecialistsPage";
import ReviewsPage from "@/pages/ReviewsPage";
import AboutUsPage from "@/pages/AboutUsPage";

export default [
    {
        to: "/",
        name: "Главная",
        element: <MainPage />
    },
    {
        to: "/about",
        name: "О нас",
        element: <AboutUsPage />
    },
    {
        to: "/reviews",
        name: "Отзывы",
        element: <ReviewsPage />
    },
    {
        to: "/productsAndPrices",
        name: "Услуги и цены",
        element: <PricesPage />
    },
    {
        to: "/specialists",
        name: "Специалисты",
        element: <SpecialistsPage />
    }
];