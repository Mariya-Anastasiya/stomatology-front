import React from "react";
import "./Specialist.scss";
import config from "@/config";
import showDescriptionHelper from "@/helpers/showDescription.helper";

interface SpecialistProps {
    id: number,
    name: string,
    imageName: string,
    description: string
}

export default function Specialist(specialist: SpecialistProps) {
    const description = specialist.description.slice(0, 255);
    const isShowMore = specialist.description.length > description.length;
    const descriptionId = `specialistDescription${specialist.id}`;
    const buttonId = `specialistButton${specialist.id}`;
    
    return (
        <div className="col">
            <div className="card h-100 shadow-sm" style={{minHeight: 350}}>
                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid image" src={`${config.imageUrl}${specialist.imageName}/`}
                            alt=""/>
                    </div>
                    <h3 className="card-title text-center">{specialist.name}</h3>
                    <div className="card-text" id={descriptionId}>
                        { isShowMore ? description + "..." : specialist.description }
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-end my-2">
                    { isShowMore && <input value="Подробнее" type="button"
                                           className="btn button button-background-turquoise"
                                           id={buttonId}
                                           onClick={(e) =>
                                               showDescriptionHelper(descriptionId, buttonId, description, specialist.description)} /> }
                </div>
            </div>
        </div>
    );
}

