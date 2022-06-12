import React from "react";

import "./FooterMenu.scss";
import {Link} from "react-router-dom";

function FooterMenu() {
    return (
        <div className="col-12  col-xl-4 d-flex flex-column justify-content-center align-items-center p-3">
            <h3>Меню</h3>
            <ul className="footer-menu list-unstyled d-flex flex-column justify-content-center align-items-center">
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/about">О компании</Link>
                </li>
                <li>
                    <Link to="/productsAndPrices">Услуги и цены</Link>
                </li>
                <li>
                    <Link to="/reviews">Оставить отзыв</Link>
                </li>
                <li>
                    <Link to="/specialists">Наши специалисты</Link>
                </li>
                <li>
                    <Link to="/auth">Войти</Link>
                </li>
            </ul>
        </div>
    );
}

export default FooterMenu;
