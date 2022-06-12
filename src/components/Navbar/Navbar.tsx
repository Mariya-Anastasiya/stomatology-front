import React from "react";

import {faPhone} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.scss";
import NavbarLogo from "@media/images/logo.svg";
import Icon from "@components/Icon/Icon";
import {NavbarNav} from "@components/Navbar/NavbarNav/NavbarNav";
import config from "@/config";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="container">
            <div className="row py-4 navigate d-flex justify-content-between align-items-center">
                <a href="/"
                    className="navigate-brand col-12 col-sm-6 col-xl-3 d-flex justify-content-center justify-content-md-start align-items-center my-4 my-sm-0 link">
                    <div className="navigate-brand__logo">
                        <img src={NavbarLogo} width={75} alt="EuroDent Logotype"/>
                    </div>
                    <div className="navigate-brand__phrase ms-2 pb-3">
                        <div className="navigate-brand__title eurodent-text-primary">
                            {config.companyName}
                        </div>
                        <div className="navigate-brand__subtitle eurodent-text-secondary">
                            Стоматологическая клиника
                        </div>
                    </div>
                </a>
                <div className="col-6 d-none d-xl-flex justify-content-center align-items-center">
                    <NavbarNav/>
                </div>
                <div
                    className="navigate-phone col-12 col-sm-6 col-xl-3 d-flex flex-row-reverse flex-sm-row justify-content-center justify-content-md-end align-items-center my-4 my-sm-0">
                    <div className="navigate-phone__numbers d-flex flex-column">
                        { config.companyNumbers.map((number) =>
                            <a key={`number${number}`} href={`tel:${number}`} className="navigate-phone__number eurodent-text-link eurodent-text-link-tel">{number}</a>) }
                    </div>
                    <Icon iconDefinition={faPhone} className="navigate-phone__icon me-2 me-sm-0 ms-sm-2" color="white"
                        background="turquoise"/>
                </div>
            </div>
        </div>
    );
}


export default Navbar;
