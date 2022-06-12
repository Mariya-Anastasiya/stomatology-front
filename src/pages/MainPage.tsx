import Header from "@components/Header/Header";
import Schedule from "@components/Schedule/Schedule";
import Categories from "@components/Categories/Categories";
import Reviews from "@components/Reviews/Reviews";
import Form from "@components/Form/Form";
import React from "react";
import AboutUsMini from "@components/AboutUs/AboutUsMini";

export default function MainPage() {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header/>
            <AboutUsMini/>
            <Schedule/>
            <Categories/>
            <Reviews/>
            <Form/>
        </div>
    );
}
