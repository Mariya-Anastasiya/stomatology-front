import React from "react";
import config from "@/config";

function TopHeaderPanel() {
    return (
        <div className="container">
            <div className="row py-4">
                <div
                    className="col-12 col-md-6 col-lg-5 d-flex align-items-center justify-content-center justify-content-md-start eurodent-text-secondary text-center">
                    Добро пожаловать на наш сайт!
                </div>
                <div
                    className="col-12 col-md-6 col-lg-7 d-flex align-items-center justify-content-center justify-content-md-end eurodent-text-secondary text-center">
                    <div className="d-none d-lg-block">Пишите нам на электронный адрес:</div>
                    <a className="ps-0 ps-md-2 eurodent-text-link" href={`${config.companyEmail}`}>{config.companyEmail}</a>
                </div>
            </div>
        </div>
    );
}

export default TopHeaderPanel;
