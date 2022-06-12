import React from "react";

interface CategoryProps {
    id: number,
    name: string,
    description: string
}

export default function Category (category: CategoryProps) {
    return (
        <div className="accordion-item" key={`category${category.id}`}>
            <h2 className="accordion-header" >
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target={`#category${category.id}`} >
                    { category.name }
                </button>
            </h2>
            <div id={`category${category.id}`} className="accordion-collapse collapse"
                data-bs-parent="#accordionCategories">
                <div className="accordion-body">
                    { category.description }
                </div>
            </div>
        </div>
    );
}

