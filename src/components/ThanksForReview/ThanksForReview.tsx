import React from "react";
import Button from "@components/Button/Button";

function ThanksForReview() {
    return (
        <div className="container p-5 d-flex justify-content-center flex-column">
            <h2 className="text-center">Ваш отзыв отправлен, ваше мнение очень важно для нас!</h2>
            <div className="d-flex justify-content-center">
                <Button to="/" value="На главную" color="turquoise"/>
            </div>
        </div>
    );
}


export default ThanksForReview;
