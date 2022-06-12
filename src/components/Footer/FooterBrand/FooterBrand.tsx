import React from "react";

import FooterLogo from "@media/images/logo.svg";
import config from "@/config";

function FooterBrand() {
    return (
        <div className="footer-brand col-12 col-xl-4 p-3 d-flex justify-content-center align-items-center flex-column">
            <div className="">
                <img src={FooterLogo} width={75} alt="EuroDent Logotype"/>
            </div>
            <div className="fw-bold m-3 display-4">{config.companyName}</div>
        </div>
    );
}

export default FooterBrand;
