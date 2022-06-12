import React from "react";

import "./HeaderSlogan.scss";
import HeaderButtons from "@components/Header/HeaderButtons/HeaderButtons";
import Text from "@components/Text/Text";

function HeaderSlogan() {
    return (
        <div
            className="header-slogan col-8 mx-auto d-flex justify-content-center justify-content-md-start align-items-center text-center py-5">
            <div>
                <h1 className="header-slogan__title display-3 fw-bold">Многопрофильная <span
                    className="header-slogan__title-turquoise">стоматологическая</span> клиника</h1>
                <div className="header-slogan__subtitle">Ваше здоровье дорогого стоит. Сохранить его с нами - стоит
                    недорого.
                </div>
                <HeaderButtons/>
            </div>
        </div>
    );
}

export default HeaderSlogan;
