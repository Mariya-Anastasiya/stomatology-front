import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {MouseEventHandler} from "react";

import "./Icon.scss";

interface IconProps {
    iconDefinition: IconDefinition,
    className?: string,
    color?: string,
    background?: string,
    href?: string,
    onClick?: MouseEventHandler
}

function Icon(props: IconProps) {
    return (
        <div>
            <a href={props.href ?? "#"} onClick={props.onClick}
                className={props.className + " d-flex  justify-content-center align-items-center icon icon-background-" + (props.background ?? "white")}>
                <FontAwesomeIcon icon={props.iconDefinition} color={props?.color}/>
            </a>
        </div>
    );
}

export default Icon;

export {
    IconProps
};
