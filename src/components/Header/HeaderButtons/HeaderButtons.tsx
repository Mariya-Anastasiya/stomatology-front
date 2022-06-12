import React from "react";
import Button from "@components/Button/Button";


function HeaderButtons() {
    return (
        <div className="container">
            <div className="row">
                <div className="flex-row">
                    <Button to="/newEntity" value="Записаться на прием" color="turquoise"/>
                    <Button to="/about" value="Подробнее о центре" color="white"/>
                </div>
            </div>
        </div>
    );
}

export default HeaderButtons;
