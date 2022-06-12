import React from "react";

import "./NavbarNav.scss";

import {Link} from "react-router-dom";

export function NavbarNav() {


    return (
        <div className="w-100 h-100">
            <ul className="row list-group list-group-horizontal list-unstyled d-flex justify-content-center flex-column flex-md-row">
                <li className="col-12 col-md-4 nav-item list-group-item text-center border-0">
                    <Link to="/" className="nav-link px-3 eurodent-nav-link">Главная</Link>
                </li>
                <li className="col-12 col-md-4 nav-item list-group-item text-center border-0">
                    <Link to="/about" className="nav-link px-3 eurodent-nav-link">О нас</Link>
                </li>
                <li className="col-12 col-md-4 nav-item list-group-item text-center border-0">
                    <Link to="/reviews" className="nav-link px-3 eurodent-nav-link">Отзывы</Link>
                </li>
            </ul>
            <ul className="row list-group list-group-horizontal list-unstyled d-flex justify-content-center flex-column flex-md-row">

                <li className="col-12 col-md-6 nav-item list-group-item text-center border-0">
                    <Link to="/productsAndPrices" className="nav-link px-3 eurodent-nav-link">Услуги и цены</Link>
                </li>
                <li className="col-12 col-md-6 nav-item list-group-item text-center border-0">
                    <Link to="/specialists" className="nav-link px-3 eurodent-nav-link">Специалисты</Link>
                </li>
            </ul>
        </div>
    );
}
