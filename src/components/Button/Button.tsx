import React, {MouseEventHandler} from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

interface ButtonProps {
    value: string,
    color?: "turquoise" | "white",
    className?: string,
    to: string,
    state?: object,
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

function Button(props: ButtonProps) {
    return (
        <Link
            to={props.to}
            onClick={props.onClick}
            state={props.state}
            className={props.className ?? "" + " col-12 col-md-5 m-2 button btn p-3 px-5 button-background-" + props.color ?? "white"}
        >
            { props.value }
        </Link>
    );
}

export default Button;
export {
    ButtonProps
};
