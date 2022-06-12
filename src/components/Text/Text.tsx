import React from "react";

interface TextProps {
    value: string
}

export default function Text(props: TextProps) {
    return (
        <div className="d-flex p-3 justify-content-center ">
            <div className="text-center eurodent-text-secondary">{ props.value }</div>
        </div>
    );
}
