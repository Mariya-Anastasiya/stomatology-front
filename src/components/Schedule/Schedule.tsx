import React from "react";
import config from "@/config";

export default function Schedule() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="display-5 text-center">Вы можете посетить нашу стоматологическую клинику по адресу</div>
                    <div className="eurodent-text-turquoise display-6 text-center fw-bold">{config.companyAddress}</div>
                </div>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-5">
                    <div className="display-6 eurodent-text-turquoise">С понедельника по пятницу:</div>
                    <div className="display-6">с 8:00 до 20:00</div>
                    <div className="display-6 eurodent-text-turquoise">В субботу:</div>
                    <div className="display-6">с 9:00 до 14:00</div>
                    <div className="display-6 eurodent-text-turquoise">В воскресенье:</div>
                    <div className="display-6">Выходной</div>
                </div>
            </div>
        </div>
    );
}
