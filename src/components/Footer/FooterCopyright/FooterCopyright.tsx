import React from "react";
import Icon from "@components/Icon/Icon";

import {faArrowAltCircleUp} from "@fortawesome/free-regular-svg-icons";
import config from "@/config";

function FooterCopyright() {
    return (
        <div className="row mt-2 p-3">
            <div
                className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center p-2">
                <div className="footer-copyright__copyright d-flex justify-content-start align-items-center">
                    Copyright (C) 2022 {config.companyName}
                </div>
            </div>
            <div
                className="col-12 col-md-6 d-flex justify-content-center mt-3 p-2 justify-content-md-end align-items-center">
                <div className="footer-copyright__backtotop d-flex justify-content-end align-items-center">
                    <div>Вернуться наверх</div>
                    <Icon className="ms-4" iconDefinition={faArrowAltCircleUp} background="turquoise" color="white"/>
                </div>
            </div>
        </div>
    );
}

export default FooterCopyright;
