import React from "react";
import Divider from "@components/Divider/Divider";
import FooterCopyright from "@components/Footer/FooterCopyright/FooterCopyright";
import FooterContent from "@components/Footer/FooterContent/FooterContent";

import "./Footer.scss";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <FooterContent/>
                <Divider/>
                <FooterCopyright/>
            </div>
        </div>
    );
}

export default Footer;
