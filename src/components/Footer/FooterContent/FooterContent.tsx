import React from "react";
import FooterBrand from "@components/Footer/FooterBrand/FooterBrand";
import FooterContacts from "@components/Footer/FooterContacts/FooterContacts";
import FooterMenu from "@components/Footer/FooterMenu/FooterMenu";

function FooterContent() {
    return (
        <div>
            <div className="row">
                <FooterContacts/>
                <FooterBrand/>
                <FooterMenu/>
            </div>
        </div>
    );
}

export default FooterContent;
