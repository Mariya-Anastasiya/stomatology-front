import React from "react";
import Button from "@components/Button/Button";
import AboutUsBase from "@components/AboutUs/AboutUsBase";

function AboutUsMini() {
    return (
        <div className="container p-5 d-flex justify-content-center flex-column">
            <AboutUsBase/>

            <div className="row">
                <Button className="d-flex justify-content-center align-items-center" to="/about" value="Подробнее" color="white" />
            </div>
        </div>
    );
}

export default AboutUsMini;
