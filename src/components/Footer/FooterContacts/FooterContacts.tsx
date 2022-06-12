import React from "react";
import Icon from "@components/Icon/Icon";
import {faPhone, faEnvelope, faMap} from "@fortawesome/free-solid-svg-icons";
// <FontAwesomeIcon Icon="fa-solid fa-envelope" />

import "./FooterContacts.scss";
import config from "@/config";

function FooterContacts() {
    return (
        <div className="footer-contacts col-12 col-xl-4 py-3 d-flex justify-content-center align-items-center">
            <div>
                <div className="d-flex flex-row-reverse justify-content-end align-items-center py-3 ms-5">
                    <div className="d-flex flex-column">
                        <div>Наш телефон:</div>
                        { config.companyNumbers.map((number) =>
                            <a key={`number${number}`} href={`tel:${number}`} className="footer-contacts__link">{number}</a>) }
                    </div>
                    <Icon iconDefinition={faPhone} className="mx-2" color="white" background="turquoise"/>
                </div>
                <div className="d-flex flex-row-reverse justify-content-end align-items-center py-3 ms-5">
                    <div className="d-flex flex-column">
                        <div>Наш почтовый адрес:</div>
                        <a href={`mailto:${config.companyEmail}`} className="footer-contacts__link">{config.companyAddress}</a>
                    </div>
                    <Icon iconDefinition={faEnvelope} className="mx-2" color="white" background="turquoise"/>
                </div>
                <div className="d-flex flex-row-reverse justify-content-end align-items-center py-3 ms-5">
                    <div className="d-flex flex-column">
                        <div>Мы находимся по адресу:</div>
                        <a href={`address:${config.companyAddress}`} className="footer-contacts__link">{config.companyAddress}</a>
                    </div>
                    <Icon iconDefinition={faMap} className="mx-2" color="white" background="turquoise"/>
                </div>
            </div>
        </div>
    );
}

export default FooterContacts;
