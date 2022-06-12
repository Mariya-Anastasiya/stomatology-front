import React from "react";
import Button from "@components/Button/Button";

import "./Form.scss";


function Form() {
    return (
        <div className="form-send py-5">
            <div className="container d-flex justify-content-center aling-items-center">
                <div className="row">
                    <div className="col col-sm-8 mx-auto">
                        <form
                            className="form d-flex justify-content-center align-items-center flex-column text-center w-100">
                            <h2 className="display-5 fw-bold m-3">Запись на прием</h2>
                            <div className="m-3 eurodent-text-secondary">Наши врачи всегда остаются с Вами на связи и
                                готовы оказать помощь - Вы можете воспользоваться услугой удалённой консультации.
                            </div>
                            <Button to="/newEntity" value="Перейти к выбору услуг" color="turquoise"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
