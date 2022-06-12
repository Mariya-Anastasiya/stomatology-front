import React, { useEffect, useState } from "react";

import CategoriesDoctor from "@media/images/categoryDoctor.jpg";
import { getCategories, ResponseCategory } from "@/requests/category.request";
import Category from "@components/Categories/Category";

export default function Categories() {
    const [categories, setCategories] = useState([] as ResponseCategory[]);

    useEffect(() => {
        getCategories().then((data) => setCategories(data));
    }, []);

    const components = categories.map((category) => {
        return <Category key = {category.id} id={category.id} name={category.name} description={category.description}/>;
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 d-none d-md-block">
                    <img className="img-fluid img-card" src={CategoriesDoctor} alt=""/>
                </div>
                <div className="col-12 col-md-6 p-3 my-auto">
                    <div className="accordion" id="accordionCategories">
                        { components }
                    </div>
                </div>
            </div>
        </div>
    );
}
