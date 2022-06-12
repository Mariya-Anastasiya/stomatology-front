import React from "react";
import Button from "@components/Button/Button";

function ThanksForNewEntity() {
    return (
        <div className="container p-5 d-flex justify-content-center flex-column">
            <h2 className="text-center">Ваша запись добавлена, спасибо что пользуютесь нашими услугами!</h2>
            <div className="d-flex justify-content-center">
                <Button to="/" value="На главную" color="turquoise"/>
            </div>
        </div>
    );
}

export default ThanksForNewEntity;
